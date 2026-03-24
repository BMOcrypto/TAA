export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  published: boolean
  tags: string[]
  readTime: number
  image?: string
}

// Mock blog data - in production, this would come from a CMS or database
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with HubSpot CRM: A Complete Guide",
    slug: "getting-started-hubspot-crm-guide",
    excerpt: "Learn how to set up and optimize your HubSpot CRM for maximum efficiency and lead conversion.",
    content: `# Getting Started with HubSpot CRM: A Complete Guide

HubSpot CRM is one of the most powerful customer relationship management platforms available today. In this comprehensive guide, we'll walk you through everything you need to know to get started.

## Why Choose HubSpot CRM?

HubSpot CRM offers a unique combination of features that make it ideal for businesses of all sizes:

- **Free tier available** - Get started without any upfront costs
- **Integrated marketing tools** - Seamlessly connect your marketing and sales efforts
- **Powerful automation** - Automate repetitive tasks and workflows
- **Comprehensive reporting** - Get insights into your sales performance

## Setting Up Your CRM

### Step 1: Account Creation
First, create your HubSpot account and verify your email address...

### Step 2: Import Your Contacts
You can import contacts from various sources including CSV files, other CRMs, and email platforms...

### Step 3: Configure Your Pipeline
Set up your sales pipeline to match your business process...

## Best Practices

1. **Keep your data clean** - Regularly audit and clean your contact database
2. **Use automation wisely** - Automate routine tasks but maintain personal touch
3. **Track the right metrics** - Focus on KPIs that matter to your business
4. **Train your team** - Ensure everyone knows how to use the system effectively

## Conclusion

HubSpot CRM can transform your sales process when implemented correctly. Take time to set it up properly and train your team for the best results.`,
    author: "Pipeline Solutions Team",
    date: "2024-01-15",
    published: true,
    tags: ["HubSpot", "CRM", "Getting Started", "Sales"],
    readTime: 8,
    image: "/placeholder.svg?height=400&width=800&text=HubSpot+CRM+Guide",
  },
  {
    id: "2",
    title: "Marketing Automation Best Practices for 2024",
    slug: "marketing-automation-best-practices-2024",
    excerpt: "Discover the latest trends and best practices in marketing automation to boost your campaigns.",
    content: `# Marketing Automation Best Practices for 2024

Marketing automation has evolved significantly, and 2024 brings new opportunities and challenges...`,
    author: "Sarah Johnson",
    date: "2024-01-10",
    published: true,
    tags: ["Marketing Automation", "Best Practices", "2024", "Campaigns"],
    readTime: 6,
    image: "/placeholder.svg?height=400&width=800&text=Marketing+Automation",
  },
  {
    id: "3",
    title: "How to Optimize Your Sales Funnel with HubSpot",
    slug: "optimize-sales-funnel-hubspot",
    excerpt: "Learn proven strategies to optimize your sales funnel and increase conversion rates using HubSpot.",
    content: `# How to Optimize Your Sales Funnel with HubSpot

A well-optimized sales funnel is crucial for business growth...`,
    author: "Mike Chen",
    date: "2024-01-05",
    published: true,
    tags: ["Sales Funnel", "HubSpot", "Optimization", "Conversion"],
    readTime: 10,
    image: "/placeholder.svg?height=400&width=800&text=Sales+Funnel",
  },
  {
    id: "4",
    title: "Advanced HubSpot Reporting Techniques",
    slug: "advanced-hubspot-reporting-techniques",
    excerpt: "Master advanced reporting in HubSpot to gain deeper insights into your business performance.",
    content: `# Advanced HubSpot Reporting Techniques

Reporting is where the magic happens in HubSpot...`,
    author: "Pipeline Solutions Team",
    date: "2023-12-28",
    published: false,
    tags: ["HubSpot", "Reporting", "Analytics", "Advanced"],
    readTime: 12,
    image: "/placeholder.svg?height=400&width=800&text=HubSpot+Reporting",
  },
]

export async function getAllPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockPosts
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.published)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const posts = await getAllPosts()
  return posts.find((post) => post.id === id) || null
}

export async function createPost(postData: Omit<BlogPost, "id">): Promise<BlogPost> {
  // In production, this would save to a database or CMS
  const newPost: BlogPost = {
    ...postData,
    id: Date.now().toString(),
  }

  mockPosts.unshift(newPost)
  return newPost
}

export async function updatePost(id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
  // In production, this would update in a database or CMS
  const postIndex = mockPosts.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return null
  }

  mockPosts[postIndex] = { ...mockPosts[postIndex], ...postData }
  return mockPosts[postIndex]
}

export async function deletePost(id: string): Promise<boolean> {
  // In production, this would delete from a database or CMS
  const postIndex = mockPosts.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return false
  }

  mockPosts.splice(postIndex, 1)
  return true
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export async function savePost(postData: BlogPost): Promise<BlogPost> {
  // In production, this would save to a database or CMS
  const existingIndex = mockPosts.findIndex((post) => post.id === postData.id)

  if (existingIndex === -1) {
    // Create new post
    mockPosts.unshift(postData)
    return postData
  } else {
    // Update existing post
    mockPosts[existingIndex] = postData
    return mockPosts[existingIndex]
  }
}
