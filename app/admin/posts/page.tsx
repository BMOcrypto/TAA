import type { Metadata } from "next"
import Link from "next/link"
import { Plus, Edit, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/blog"
import { DeletePostButton } from "@/components/admin/delete-post-button"

export const metadata: Metadata = {
  title: "Manage Posts - Scaled CMS",
  description: "Manage all your blog posts",
}

export default async function ManagePostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manage Posts</h1>
              <p className="text-gray-600">Create, edit, and organize your blog content</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <Link href="/admin/posts/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin">Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {posts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Plus className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-6">Get started by creating your first blog post.</p>
              <Button asChild>
                <Link href="/admin/posts/new">Create First Post</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-base mb-3">{post.excerpt}</CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                        <Badge variant="outline">{post.category}</Badge>
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      {post.published && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        </Button>
                      )}
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/admin/posts/${post.id}/edit`}>
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                      <DeletePostButton postId={post.id} postTitle={post.title} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
