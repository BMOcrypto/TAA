import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostById } from "@/lib/blog"
import { PostForm } from "@/components/admin/post-form"

export const metadata: Metadata = {
  title: "Edit Post - Scaled CMS",
  description: "Edit blog post",
}

interface EditPostPageProps {
  params: {
    id: string
  }
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Edit Post</h1>
          <p className="text-gray-600">Make changes to your blog post</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <PostForm post={post} />
      </div>
    </div>
  )
}
