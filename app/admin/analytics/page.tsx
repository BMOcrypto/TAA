import type { Metadata } from "next"
import { BarChart3, TrendingUp, Download, Eye, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { requireAuth } from "@/lib/auth"
import { getAnalyticsData } from "@/lib/analytics"
import { AdminHeader } from "@/components/admin/admin-header"

export const metadata: Metadata = {
  title: "Analytics - Scaled",
  description: "Website analytics and performance metrics",
}

export default async function AnalyticsPage() {
  const user = await requireAuth()
  const analytics = await getAnalyticsData()

  const metrics = [
    {
      title: "Total Page Views",
      value: analytics.pageViews.total.toLocaleString(),
      change: `+${analytics.pageViews.change}%`,
      changeType: "positive" as const,
      description: "vs last month",
      icon: <Eye className="h-4 w-4" />,
    },
    {
      title: "This Month",
      value: analytics.pageViews.thisMonth.toLocaleString(),
      change: `${analytics.pageViews.thisMonth - analytics.pageViews.lastMonth}`,
      changeType: "positive" as const,
      description: "page views",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Resource Downloads",
      value: analytics.resources.downloads.toLocaleString(),
      change: `${analytics.resources.thisMonth} this month`,
      changeType: "neutral" as const,
      description: "total downloads",
      icon: <Download className="h-4 w-4" />,
    },
    {
      title: "Avg. Session",
      value: "3m 24s",
      change: "+12%",
      changeType: "positive" as const,
      description: "vs last month",
      icon: <Clock className="h-4 w-4" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader user={user} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
          <p className="text-gray-600">Track your website performance and user engagement</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                {metric.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span
                    className={
                      metric.changeType === "positive"
                        ? "text-green-600"
                        : metric.changeType === "negative"
                          ? "text-red-600"
                          : "text-gray-600"
                    }
                  >
                    {metric.change}
                  </span>
                  <span>{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{page.path}</div>
                      <div className="text-sm text-gray-500">{page.views.toLocaleString()} views</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${page.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {page.change >= 0 ? "+" : ""}
                        {page.change}%
                      </div>
                      <div className="text-xs text-gray-500">vs last month</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Top Resources</CardTitle>
              <CardDescription>Most downloaded resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.topResources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-sm leading-tight">{resource.title}</div>
                      <div className="text-sm text-gray-500">{resource.downloads} downloads</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-medium ${resource.change >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {resource.change >= 0 ? "+" : ""}
                        {resource.change}%
                      </div>
                      <div className="text-xs text-gray-500">vs last month</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Placeholder */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>Page views over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                <p>Chart visualization would go here</p>
                <p className="text-sm">Integration with analytics service required</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
