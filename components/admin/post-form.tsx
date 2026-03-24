"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createPost, updatePost } from "@/app/admin/actions"
import type { BlogPost } from "@/lib/blog"

interface PostFormProps {
  post?: BlogPost
}

const categories = [
  "Marketing Automation",
  "CRM Optimization",
  "Analytics",
  "Reporting",
  "Integrations",
  "Lead Management",
  "Sales",
  "Implementation",
  "Best Practices",
  "Case Studies",
]

export function PostForm({ post }: PostFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tags, setTags] = useState<string[]>(post?.tags || [])
  const [newTag, setNewTag] = useState("")

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      // Add tags to form data
      formData.append("tags", JSON.stringify(tags))

      if (post) {
        await updatePost(post.id, formData)
      } else {
        await createPost(formData)
      }

      router.push("/admin/posts")
      router.refresh()
    } catch (error) {
      console.error("Error saving post:", error)
      alert("Error saving post. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/admin/posts">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Link>
        </Button>
        <div className="flex items-center space-x-4">
          <Button type="submit" disabled={isSubmitting}>
            <Save className="h-4 w-4 mr-2" />
            {isSubmitting ? "Saving..." : post ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
              <CardDescription>Write your blog post content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input id="title" name="title" defaultValue={post?.title} placeholder="Enter post title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  defaultValue={post?.excerpt}
                  placeholder="Brief description of the post"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  name="content"
                  defaultValue={post?.content}
                  placeholder="Write your blog post content here..."
                  rows={20}
                  className="font-mono text-sm"
                  required
                />
                <p className="text-sm text-gray-500">You can use Markdown formatting for rich text content.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="author">Author *</Label>
                <Input
                  id="author"
                  name="author"
                  defaultValue={post?.author || "Pipeline Solutions Group Team"}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select name="category" defaultValue={post?.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  type="url"
                  defaultValue={post?.image}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="published" name="published" defaultChecked={post?.published ?? false} />
                <Label htmlFor="published">Publish immediately</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Add tags to help categorize your post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addTag()
                    }
                  }}
                />
                <Button type="button" onClick={addTag} size="sm">
                  Add
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {post && (
            <Card>
              <CardHeader>
                <CardTitle>Post Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div>Created: {new Date(post.createdAt).toLocaleString()}</div>
                <div>Updated: {new Date(post.updatedAt).toLocaleString()}</div>
                <div>Read Time: {post.readTime}</div>
                {post.published && (
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Live Post
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </form>
  )
}
