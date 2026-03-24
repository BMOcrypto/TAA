"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 text-6xl font-bold text-gray-300">404</div>
          <CardTitle className="text-xl font-semibold text-gray-900">Page Not Found</CardTitle>
          <CardDescription className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/services">
                <Search className="mr-2 h-4 w-4" />
                Browse Services
              </Link>
            </Button>

            <Button variant="ghost" onClick={() => window.history.back()} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Need help?{" "}
              <Link href="/contact" className="text-orange-600 hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
