import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

import { Montserrat, Inter, Open_Sans as V0_Font_Open_Sans, Montserrat as V0_Font_Montserrat } from 'next/font/google'

// Initialize fonts
const _openSans = V0_Font_Open_Sans({ subsets: ['latin'], weight: ["300","400","500","600","700","800"] })
const _montserrat = V0_Font_Montserrat({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "The Automation Architects - Business Process Automation Experts",
    template: "%s | The Automation Architects",
  },
  description:
    "Designing intelligent automation solutions for modern businesses. Expert business process automation, workflow optimization, and system integration services to transform your operations.",
  keywords: [
    "business automation",
    "process automation",
    "workflow optimization",
    "system integration",
    "automation consulting",
    "business efficiency",
    "digital transformation",
    "The Automation Architects",
  ],
  authors: [{ name: "The Automation Architects" }],
  creator: "The Automation Architects",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theautomationarchitects.com",
    siteName: "The Automation Architects",
    title: "The Automation Architects - Business Process Automation Experts",
    description: "Designing intelligent automation solutions for modern businesses. Expert automation consulting and implementation services.",
    images: [
      {
        url: "/taa-logo.png",
        width: 1200,
        height: 630,
        alt: "The Automation Architects Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Automation Architects - Automation Experts",
    description: "Designing intelligent automation solutions for modern businesses",
    images: ["/taa-logo.png"],
    creator: "@automationarchs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/taa-logo.png",
    apple: "/taa-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-white">
        <Suspense fallback={null}>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
