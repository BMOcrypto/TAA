import { NextResponse } from "next/server"

interface HealthCheck {
  status: "healthy" | "degraded" | "unhealthy"
  timestamp: string
  version: string
  environment: string
  checks: {
    database: "pass" | "fail"
    external_apis: "pass" | "fail"
    memory: "pass" | "fail"
    disk: "pass" | "fail"
  }
  uptime: number
  memory_usage: {
    used: number
    total: number
    percentage: number
  }
}

const startTime = Date.now()

async function checkDatabase(): Promise<"pass" | "fail"> {
  try {
    // In a real app, you would check your database connection here
    // For this demo, we'll simulate a database check
    return "pass"
  } catch (error) {
    console.error("Database health check failed:", error)
    return "fail"
  }
}

async function checkExternalAPIs(): Promise<"pass" | "fail"> {
  try {
    // Check HubSpot API if configured
    if (process.env.HUBSPOT_API_KEY) {
      const response = await fetch("https://api.hubapi.com/crm/v3/owners", {
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
        signal: AbortSignal.timeout(5000), // 5 second timeout
      })

      if (!response.ok) {
        throw new Error(`HubSpot API returned ${response.status}`)
      }
    }

    return "pass"
  } catch (error) {
    console.error("External API health check failed:", error)
    return "fail"
  }
}

function checkMemory(): "pass" | "fail" {
  try {
    const memoryUsage = process.memoryUsage()
    const totalMemory = memoryUsage.heapTotal
    const usedMemory = memoryUsage.heapUsed
    const memoryPercentage = (usedMemory / totalMemory) * 100

    // Consider memory unhealthy if over 90% usage
    return memoryPercentage < 90 ? "pass" : "fail"
  } catch (error) {
    console.error("Memory health check failed:", error)
    return "fail"
  }
}

function checkDisk(): "pass" | "fail" {
  try {
    // In a real app, you would check disk usage here
    // For this demo, we'll assume disk is healthy
    return "pass"
  } catch (error) {
    console.error("Disk health check failed:", error)
    return "fail"
  }
}

function getMemoryUsage() {
  const memoryUsage = process.memoryUsage()
  return {
    used: Math.round(memoryUsage.heapUsed / 1024 / 1024), // MB
    total: Math.round(memoryUsage.heapTotal / 1024 / 1024), // MB
    percentage: Math.round((memoryUsage.heapUsed / memoryUsage.heapTotal) * 100),
  }
}

export async function GET() {
  try {
    const [database, externalAPIs, memory, disk] = await Promise.all([
      checkDatabase(),
      checkExternalAPIs(),
      checkMemory(),
      checkDisk(),
    ])

    const checks = { database, external_apis: externalAPIs, memory, disk }
    const failedChecks = Object.values(checks).filter((check) => check === "fail").length

    let status: "healthy" | "degraded" | "unhealthy"
    if (failedChecks === 0) {
      status = "healthy"
    } else if (failedChecks <= 2) {
      status = "degraded"
    } else {
      status = "unhealthy"
    }

    const healthCheck: HealthCheck = {
      status,
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || "1.0.0",
      environment: process.env.NODE_ENV || "development",
      checks,
      uptime: Math.floor((Date.now() - startTime) / 1000), // seconds
      memory_usage: getMemoryUsage(),
    }

    const statusCode = status === "healthy" ? 200 : status === "degraded" ? 200 : 503

    return NextResponse.json(healthCheck, { status: statusCode })
  } catch (error) {
    console.error("Health check failed:", error)

    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: "Health check failed",
      },
      { status: 503 },
    )
  }
}
