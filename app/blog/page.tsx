import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPublishedPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "HubSpot Blog - Tips, Best Practices & Industry Insights",
  description:
    "Stay updated with the latest HubSpot tips, marketing automation best practices, CRM optimization strategies, and industry insights from our certified experts.",
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  const categories = ["All Posts", ...Array.from(new Set(posts.map((post) => post.category)))]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">HubSpot Insights & Best Practices</h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay ahead with expert tips, industry insights, and proven strategies to maximize your HubSpot investment
              and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-4">
                Featured Article
              </Badge>
            </div>
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-orange-600 hover:bg-orange-700" asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>Read Full Article</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {regularPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={index === 0 ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No posts yet</h2>
            <p className="text-gray-600 mb-8">Check back soon for expert HubSpot insights and best practices.</p>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Stay Updated with HubSpot Insights</h2>
            <p className="text-xl text-orange-100 mb-8">
              Get the latest HubSpot tips, best practices, and industry insights delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-300"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
