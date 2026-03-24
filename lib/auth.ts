import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user"
  lastLogin?: string
  loginAttempts?: number
  lockedUntil?: string
}

export interface Session {
  user: User
  expires: string
  sessionId: string
  csrfToken: string
  ipAddress?: string
  userAgent?: string
}

// Security configuration
const MAX_LOGIN_ATTEMPTS = 5
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours
const CSRF_TOKEN_LENGTH = 32

// Generate secure random token using Web Crypto API
function generateSecureToken(length = 32): string {
  const array = new Uint8Array(length)
  crypto.getRandomValues(array)
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

// Simple hash function for browser compatibility
async function hashPassword(password: string, salt: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + salt)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

// Verify password
async function verifyPassword(password: string, hash: string, salt: string): Promise<boolean> {
  const verifyHash = await hashPassword(password, salt)
  return verifyHash === hash
}

// Rate limiting for login attempts
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const attempts = loginAttempts.get(identifier)

  if (!attempts) {
    loginAttempts.set(identifier, { count: 1, lastAttempt: now })
    return true
  }

  // Reset if more than 1 hour has passed
  if (now - attempts.lastAttempt > 60 * 60 * 1000) {
    loginAttempts.set(identifier, { count: 1, lastAttempt: now })
    return true
  }

  if (attempts.count >= MAX_LOGIN_ATTEMPTS) {
    return false
  }

  attempts.count++
  attempts.lastAttempt = now
  return true
}

export async function getSession(): Promise<Session | null> {
  try {
    const cookieStore = await cookies()
    const sessionData = cookieStore.get("session")
    const csrfToken = cookieStore.get("csrf-token")

    if (!sessionData?.value || !csrfToken?.value) {
      return null
    }

    const session = JSON.parse(sessionData.value) as Session

    // Check if session is expired
    if (new Date(session.expires) < new Date()) {
      await deleteSession()
      return null
    }

    // Verify CSRF token
    if (session.csrfToken !== csrfToken.value) {
      await deleteSession()
      return null
    }

    return session
  } catch (error) {
    console.error("Error getting session:", error)
    await deleteSession()
    return null
  }
}

export async function requireAuth(): Promise<User> {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return session.user
}

export async function createSession(user: User, ipAddress?: string, userAgent?: string): Promise<void> {
  const sessionId = generateSecureToken()
  const csrfToken = generateSecureToken(CSRF_TOKEN_LENGTH)

  const session: Session = {
    user: {
      ...user,
      lastLogin: new Date().toISOString(),
    },
    expires: new Date(Date.now() + SESSION_DURATION).toISOString(),
    sessionId,
    csrfToken,
    ipAddress,
    userAgent,
  }

  const cookieStore = await cookies()

  // Set session cookie
  cookieStore.set("session", JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_DURATION / 1000,
    path: "/",
  })

  // Set CSRF token cookie
  cookieStore.set("csrf-token", csrfToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_DURATION / 1000,
    path: "/",
  })
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("session")
  cookieStore.delete("csrf-token")
}

export async function login(
  email: string,
  password: string,
  ipAddress?: string,
  userAgent?: string,
): Promise<User | null> {
  // Check rate limiting
  if (!checkRateLimit(email)) {
    throw new Error("Too many login attempts. Please try again later.")
  }

  // Demo credentials with simple hash
  const demoSalt = "opsyn-demo-salt-2024"
  const demoHash = await hashPassword("OpsynDemo2024!", demoSalt)

  // Verify credentials
  if (email === "admin@opsyn.com" && (await verifyPassword(password, demoHash, demoSalt))) {
    const user: User = {
      id: "demo-admin",
      email: "admin@opsyn.com",
      name: "Opsyn Admin",
      role: "admin",
      lastLogin: new Date().toISOString(),
      loginAttempts: 0,
    }

    // Reset login attempts on successful login
    loginAttempts.delete(email)

    await createSession(user, ipAddress, userAgent)
    return user
  }

  return null
}

export async function logout(): Promise<void> {
  await deleteSession()
  redirect("/admin/login")
}

export async function validateCSRFToken(token: string): Promise<boolean> {
  const session = await getSession()
  return session?.csrfToken === token
}

// Password strength validation
export function validatePasswordStrength(password: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long")
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter")
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter")
  }

  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number")
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must contain at least one special character")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Email validation
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize user input
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim()
}
