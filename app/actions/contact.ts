"use server"

import { revalidatePath } from "next/cache"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Input validation and sanitization
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "")
}

function validateContactData(data: ContactFormData): { isValid: boolean; error?: string } {
  if (!data.name || data.name.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long" }
  }

  if (!validateEmail(data.email)) {
    return { isValid: false, error: "Please enter a valid email address" }
  }

  if (!data.subject) {
    return { isValid: false, error: "Please select a subject" }
  }

  if (!data.message || data.message.length < 10) {
    return { isValid: false, error: "Message must be at least 10 characters long" }
  }

  return { isValid: true }
}

export async function submitHeroContactForm(
  formData: FormData,
): Promise<{ success: boolean; error?: string; message?: string }> {
  try {
    // Extract and validate form data
    const data: ContactFormData = {
      name: sanitizeInput((formData.get("name") as string) || ""),
      email: (formData.get("email") as string) || "",
      subject: sanitizeInput((formData.get("subject") as string) || ""),
      message: sanitizeInput((formData.get("message") as string) || ""),
    }

    // Validate input data
    const validation = validateContactData(data)
    if (!validation.isValid) {
      return { success: false, error: validation.error }
    }

    const timestamp = new Date().toISOString()

    // Log the submission for internal tracking
    console.log("Hero Contact Form Submission:", {
      ...data,
      timestamp,
      source: "hero-form",
    })

    // Simulate processing time for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Revalidate relevant pages
    revalidatePath("/")
    revalidatePath("/contact")

    return {
      success: true,
      message: "Thank you for your message! We've received your inquiry and will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

export async function submitMainContactForm(
  formData: FormData,
): Promise<{ success: boolean; error?: string; message?: string }> {
  try {
    const data = {
      name: sanitizeInput((formData.get("name") as string) || ""),
      email: (formData.get("email") as string) || "",
      company: sanitizeInput((formData.get("company") as string) || ""),
      phone: sanitizeInput((formData.get("phone") as string) || ""),
      service: sanitizeInput((formData.get("service") as string) || ""),
      budget: sanitizeInput((formData.get("budget") as string) || ""),
      message: sanitizeInput((formData.get("message") as string) || ""),
      newsletter: formData.get("newsletter") === "yes",
    }

    // Validate required fields
    if (!data.name || data.name.length < 2) {
      return { success: false, error: "Name must be at least 2 characters long" }
    }

    if (!validateEmail(data.email)) {
      return { success: false, error: "Please enter a valid email address" }
    }

    const timestamp = new Date().toISOString()

    console.log("Main Contact Form Submission:", {
      ...data,
      timestamp,
      source: "contact-page",
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Revalidate pages
    revalidatePath("/contact")

    return {
      success: true,
      message: "Thank you for your detailed inquiry! We've received your message and will contact you soon.",
    }
  } catch (error) {
    console.error("Main contact form error:", error)
    return { success: false, error: "Failed to submit form. Please try again." }
  }
}
