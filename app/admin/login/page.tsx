import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { LoginForm } from "@/components/admin/login-form"

export const metadata: Metadata = {
  title: "Admin Login - Scaled",
  description: "Login to the admin dashboard",
}

export default async function LoginPage() {
  const session = await getSession()

  if (session) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="bg-orange-600 text-white p-3 rounded-lg">
              <span className="text-xl font-bold">Scaled Consulting Firm</span>
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Admin Dashboard</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to manage your content</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
