import type { Metadata } from "next"
import { PostForm } from "@/components/admin/post-form"

export const metadata: Metadata = {
  title: "New Post - Scaled CMS",
  description: "Create a new blog post",
}

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Create New Post</h1>
          <p className="text-gray-600">Write and publish a new blog post</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <PostForm />
      </div>
    </div>
  )
}
