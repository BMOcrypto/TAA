"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    hj?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    lintrk?: (...args: any[]) => void
    clarity?: (...args: any[]) => void
    trackButtonClick?: (buttonName: string, location: string) => void
    trackFormSubmission?: (formName: string, success: boolean) => void
    trackPageView?: (pageName: string) => void
    _hsq?: any[]
  }
}

export function Analytics() {
  useEffect(() => {
    // Initialize tracking functions for development
    if (typeof window !== "undefined") {
      window.trackButtonClick = (buttonName: string, location: string) => {
        // Google Analytics
        if (window.gtag) {
          window.gtag("event", "click", {
            event_category: "engagement",
            event_label: `${buttonName}_${location}`,
            custom_parameter_1: buttonName,
            custom_parameter_2: location,
          })
        }

        // Facebook Pixel
        if (window.fbq) {
          window.fbq("track", "Lead", {
            content_name: buttonName,
            content_category: location,
          })
        }

        // LinkedIn Insight Tag
        if (window.lintrk) {
          window.lintrk("track", { conversion_id: "click" })
        }

        // HubSpot
        if (window._hsq) {
          window._hsq.push([
            "trackEvent",
            {
              id: "button_click",
              value: {
                button_name: buttonName,
                location: location,
              },
            },
          ])
        }
      }

      window.trackFormSubmission = (formName: string, success: boolean) => {
        // Google Analytics
        if (window.gtag) {
          window.gtag("event", success ? "form_submit" : "form_error", {
            event_category: "engagement",
            event_label: formName,
            value: success ? 1 : 0,
          })
        }

        // Facebook Pixel
        if (window.fbq && success) {
          window.fbq("track", "Lead", {
            content_name: formName,
          })
        }

        // LinkedIn Insight Tag
        if (window.lintrk && success) {
          window.lintrk("track", { conversion_id: "form_submit" })
        }
      }

      window.trackPageView = (pageName: string) => {
        // Google Analytics
        if (window.gtag) {
          window.gtag("event", "page_view", {
            page_title: pageName,
            page_location: window.location.href,
          })
        }

        // Hotjar
        if (window.hj) {
          window.hj("stateChange", window.location.pathname)
        }
      }
    }

    // Track page view on mount
    if (typeof window !== "undefined" && window._hsq) {
      window._hsq.push(["trackPageView"])
    }

    // Track route changes for SPA navigation
    const handleRouteChange = () => {
      if (window._hsq) {
        window._hsq.push(["trackPageView"])
      }
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  // Return null - analytics scripts should be loaded via next/script in layout.tsx
  // or via a separate server component to avoid client-side script rendering issues
  return null
}
