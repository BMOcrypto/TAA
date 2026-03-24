"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { savePost, deletePost as deletePostFromStorage, generateSlug, calculateReadTime } from "@/lib/blog"
import { saveResource, deleteResource as deleteResourceFromStorage } from "@/lib/resources"
import { login, logout } from "@/lib/auth"
import type { BlogPost } from "@/lib/blog"
import type { Resource } from "@/lib/resources"

// Authentication actions
export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const user = await login(email, password)

  if (!user) {
    return { success: false, error: "Invalid credentials" }
  }

  return { success: true }
}

export async function logoutAction() {
  await logout()
  redirect("/admin/login")
}

// Blog post actions
export async function createPost(formData: FormData) {
  const title = formData.get("title") as string
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const author = formData.get("author") as string
  const category = formData.get("category") as string
  const image = formData.get("image") as string
  const published = formData.get("published") === "on"
  const scheduledDate = formData.get("scheduledDate") as string
  const tagsJson = formData.get("tags") as string

  const tags = tagsJson ? JSON.parse(tagsJson) : []
  const slug = generateSlug(title)
  const readTime = calculateReadTime(content)
  const now = new Date().toISOString()

  const post: BlogPost = {
    id: Date.now().toString(),
    title,
    slug,
    excerpt,
    content,
    author,
    date: scheduledDate || now,
    readTime,
    category,
    tags,
    image: image || "/placeholder.svg?height=400&width=800",
    published,
    createdAt: now,
    updatedAt: now,
  }

  await savePost(post)
  revalidatePath("/blog")
  revalidatePath("/admin")
}

export async function updatePost(id: string, formData: FormData) {
  const title = formData.get("title") as string
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const author = formData.get("author") as string
  const category = formData.get("category") as string
  const image = formData.get("image") as string
  const published = formData.get("published") === "on"
  const scheduledDate = formData.get("scheduledDate") as string
  const tagsJson = formData.get("tags") as string

  const tags = tagsJson ? JSON.parse(tagsJson) : []
  const slug = generateSlug(title)
  const readTime = calculateReadTime(content)

  // Get existing post to preserve creation date
  const { getPostById } = await import("@/lib/blog")
  const existingPost = await getPostById(id)

  if (!existingPost) {
    throw new Error("Post not found")
  }

  const post: BlogPost = {
    ...existingPost,
    title,
    slug,
    excerpt,
    content,
    author,
    date: scheduledDate || existingPost.date,
    readTime,
    category,
    tags,
    image: image || "/placeholder.svg?height=400&width=800",
    published,
    updatedAt: new Date().toISOString(),
  }

  await savePost(post)
  revalidatePath("/blog")
  revalidatePath("/admin")
  revalidatePath(`/blog/${post.slug}`)
}

export async function deletePost(id: string) {
  await deletePostFromStorage(id)
  revalidatePath("/blog")
  revalidatePath("/admin")
}

// Resource actions
export async function createResource(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const type = formData.get("type") as Resource["type"]
  const category = formData.get("category") as string
  const format = formData.get("format") as string
  const fileUrl = formData.get("fileUrl") as string
  const featured = formData.get("featured") === "on"
  const published = formData.get("published") === "on"
  const tagsJson = formData.get("tags") as string

  const tags = tagsJson ? JSON.parse(tagsJson) : []
  const now = new Date().toISOString()

  const resource: Resource = {
    id: Date.now().toString(),
    title,
    description,
    type,
    category,
    format,
    fileUrl,
    downloadCount: 0,
    featured,
    published,
    tags,
    createdAt: now,
    updatedAt: now,
    createdBy: "Admin User", // In production, get from session
  }

  await saveResource(resource)
  revalidatePath("/resources")
  revalidatePath("/admin")
}

export async function updateResource(id: string, formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const type = formData.get("type") as Resource["type"]
  const category = formData.get("category") as string
  const format = formData.get("format") as string
  const fileUrl = formData.get("fileUrl") as string
  const featured = formData.get("featured") === "on"
  const published = formData.get("published") === "on"
  const tagsJson = formData.get("tags") as string

  const tags = tagsJson ? JSON.parse(tagsJson) : []

  // Get existing resource
  const { getResourceById } = await import("@/lib/resources")
  const existingResource = await getResourceById(id)

  if (!existingResource) {
    throw new Error("Resource not found")
  }

  const resource: Resource = {
    ...existingResource,
    title,
    description,
    type,
    category,
    format,
    fileUrl,
    featured,
    published,
    tags,
    updatedAt: new Date().toISOString(),
  }

  await saveResource(resource)
  revalidatePath("/resources")
  revalidatePath("/admin")
}

export async function deleteResourceAction(id: string) {
  await deleteResourceFromStorage(id)
  revalidatePath("/resources")
  revalidatePath("/admin")
}
