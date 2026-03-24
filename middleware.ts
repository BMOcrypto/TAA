import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Basic security headers configuration
const securityHeaders = {
  // Prevent XSS attacks
  "X-XSS-Protection": "1; mode=block",
  // Prevent clickjacking
  "X-Frame-Options": "DENY",
  // Prevent MIME type sniffing
  "X-Content-Type-Options": "nosniff",
  // Referrer policy
  "Referrer-Policy": "strict-origin-when-cross-origin",
  // Basic Content Security Policy
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hs-scripts.com https://js.hsforms.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.hsforms.com https://forms.hubspot.com",
    "frame-src 'self' https://js.hsforms.net",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://api.hsforms.com",
  ].join("; "),
}

// Simple rate limiting
const rateLimitMap = new Map()

function rateLimit(ip: string, limit = 100, windowMs = 60000): boolean {
  const now = Date.now()
  const windowStart = now - windowMs

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [])
  }

  const requests = rateLimitMap.get(ip)
  const validRequests = requests.filter((timestamp: number) => timestamp > windowStart)

  if (validRequests.length >= limit) {
    return false
  }

  validRequests.push(now)
  rateLimitMap.set(ip, validRequests)
  return true
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"
  const pathname = request.nextUrl.pathname

  // Apply security headers to all responses
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === "https:") {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
  }

  // Basic rate limiting
  if (!rateLimit(ip, 100, 60000)) {
    console.warn(`Rate limit exceeded for IP: ${ip}`)
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": "60",
        ...Object.fromEntries(Object.entries(securityHeaders)),
      },
    })
  }

  // Admin route protection
  if (pathname.startsWith("/admin")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate")
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
