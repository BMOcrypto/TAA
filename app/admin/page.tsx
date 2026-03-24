import type { Metadata } from "next"
import Link from "next/link"
import { Plus, FileText, BarChart, TrendingUp, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { requireAuth } from "@/lib/auth"
import { getAllPosts } from "@/lib/blog"
import { getAllResources } from "@/lib/resources"
import { getAnalyticsData } from "@/lib/analytics"
import { AdminHeader } from "@/components/admin/admin-header"

export const metadata: Metadata = {
  title: "Admin Dashboard - Scaled",
  description: "Manage your website content and analytics",
}

export default async function AdminDashboard() {
  const user = await requireAuth()
  const posts = await getAllPosts()
  const resources = await getAllResources()
  const analytics = await getAnalyticsData()

  const publishedPosts = posts.filter((post) => post.published)
  const draftPosts = posts.filter((post) => !post.published)
  const publishedResources = resources.filter((resource) => resource.published)

  const stats = [
    {
      title: "Page Views",
      value: analytics.pageViews.total.toLocaleString(),
      change: `+${analytics.pageViews.change}%`,
      changeType: "positive" as const,
      description: "Total page views",
      icon: <Eye className="h-4 w-4" />,
    },
    {
      title: "Blog Posts",
      value: publishedPosts.length,
      change: `${analytics.blogPosts.thisMonth} this month`,
      changeType: "neutral" as const,
      description: `${draftPosts.length} drafts`,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Resources",
      value: publishedResources.length,
      change: `${analytics.resources.downloads} downloads`,
      changeType: "positive" as const,
      description: "Published resources",
      icon: <Download className="h-4 w-4" />,
    },
    {
      title: "Growth",
      value: `+${analytics.pageViews.change}%`,
      change: "vs last month",
      changeType: "positive" as const,
      description: "Monthly growth",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader user={user} />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Here's what's happening with your website today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span
                    className={
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : stat.changeType === "negative"
                          ? "text-red-600"
                          : "text-gray-600"
                    }
                  >
                    {stat.change}
                  </span>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="h-auto p-4 justify-start" asChild>
                    <Link href="/admin/posts/new">
                      <Plus className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">New Blog Post</div>
                        <div className="text-sm text-muted-foreground">Create and publish content</div>
                      </div>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                    <Link href="/admin/resources/new">
                      <Download className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Add Resource</div>
                        <div className="text-sm text-muted-foreground">Upload guides and templates</div>
                      </div>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                    <Link href="/admin/posts">
                      <FileText className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Manage Posts</div>
                        <div className="text-sm text-muted-foreground">Edit existing content</div>
                      </div>
                    </Link>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                    <Link href="/admin/analytics">
                      <BarChart className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">View Analytics</div>
                        <div className="text-sm text-muted-foreground">Track performance</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Posts</CardTitle>
                  <CardDescription>Your latest blog posts</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/posts">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                {posts.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                    <p className="text-gray-600 mb-4">Get started by creating your first blog post.</p>
                    <Button asChild>
                      <Link href="/admin/posts/new">Create First Post</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {posts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{post.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{post.author}</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <Badge variant={post.published ? "default" : "secondary"}>
                              {post.published ? "Published" : "Draft"}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/admin/posts/${post.id}/edit`}>Edit</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics.topPages.slice(0, 5).map((page, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{page.path}</div>
                        <div className="text-xs text-gray-500">{page.views.toLocaleString()} views</div>
                      </div>
                      <div className={`text-xs ${page.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {page.change >= 0 ? "+" : ""}
                        {page.change}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.title}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{activity.user}</span>
                          <span>•</span>
                          <span>{new Date(activity.timestamp).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
