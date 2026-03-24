"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { submitMainContactForm } from "@/app/actions/contact"
import { Loader2, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitMainContactForm(formData)

      if (result.success) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
        <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">Thank You!</h3>
        <p className="text-green-700 dark:text-green-300">
          We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-800 dark:text-red-200">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="john@company.com" required disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your Company" disabled={isSubmitting} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" disabled={isSubmitting} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select name="service" disabled={isSubmitting}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hubspot-setup">HubSpot Setup & Implementation</SelectItem>
            <SelectItem value="optimization">HubSpot Optimization</SelectItem>
            <SelectItem value="training">Training & Support</SelectItem>
            <SelectItem value="consulting">Strategic Consulting</SelectItem>
            <SelectItem value="integration">Integration Services</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Budget Range</Label>
        <Select name="budget" disabled={isSubmitting}>
          <SelectTrigger>
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-5k">Under $5,000</SelectItem>
            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
            <SelectItem value="over-50k">Over $50,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your HubSpot needs and goals..."
          rows={6}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" name="newsletter" value="yes" disabled={isSubmitting} />
        <Label htmlFor="newsletter" className="text-sm font-normal cursor-pointer">
          I'd like to receive HubSpot tips and updates from Opsyn
        </Label>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We typically respond within 24 hours during business days
      </p>
    </form>
  )
}
