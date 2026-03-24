// Mock analytics data for demonstration
// In production, this would integrate with Google Analytics API and internal tracking

export interface AnalyticsData {
  pageViews: {
    total: number
    change: number
  }
  blogPosts: {
    thisMonth: number
  }
  resources: {
    downloads: number
  }
  topPages: Array<{
    path: string
    views: number
    change: number
  }>
  recentActivity: Array<{
    id: string
    title: string
    user: string
    timestamp: string
  }>
}

export async function getAnalyticsData(): Promise<AnalyticsData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  // Mock data - in production, this would come from Google Analytics API
  return {
    pageViews: {
      total: 12847,
      change: 15.2
    },
    blogPosts: {
      thisMonth: 4
    },
    resources: {
      downloads: 342
    },
    topPages: [
      { path: '/', views: 4521, change: 12.3 },
      { path: '/services', views: 2847, change: 8.7 },
      { path: '/about', views: 1923, change: -2.1 },
      { path: '/contact', views: 1654, change: 18.9 },
      { path: '/blog', views: 1247, change: 5.4 },
      { path: '/case-studies', views: 987, change: 22.1 },
      { path: '/resources', views: 743, change: 14.2 }
    ],
    recentActivity: [
      {
        id: '1',
        title: 'New blog post published: "HubSpot Automation Best Practices"',
        user: 'Admin',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '2',
        title: 'Contact form submission from John Smith',
        user: 'System',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '3',
        title: 'Resource downloaded: "CRM Setup Guide"',
        user: 'System',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '4',
        title: 'New user registration: jane@company.com',
        user: 'System',
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '5',
        title: 'Blog post updated: "Getting Started with HubSpot"',
        user: 'Admin',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
      }
    ]
  }
}

// Function to track custom events
export async function trackEvent(eventName: string, properties: Record<string, any> = {}) {
  try {
    // In production, this would send to Google Analytics or other tracking service
    console.log('Analytics Event:', {
      event: eventName,
      properties,
      timestamp: new Date().toISOString()
    })

    // You could also send to an internal API endpoint
    // await fetch('/api/analytics/track', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ event: eventName, properties })
    // })
  } catch (error) {
    console.error('Failed to track event:', error)
  }
}

// Function to get real-time visitor count
export async function getRealtimeVisitors(): Promise<number> {
  try {
    // Mock real-time data
    return Math.floor(Math.random() * 50) + 10
  } catch (error) {
    console.error('Failed to get realtime visitors:', error)
    return 0
  }
}

// Function to get conversion funnel data
export async function getConversionFunnel(): Promise<Array<{ stage: string; visitors: number; rate: number }>> {
  return [
    { stage: 'Visitors', visitors: 12847, rate: 100 },
    { stage: 'Page Views', visitors: 8934, rate: 69.5 },
    { stage: 'Contact Form Views', visitors: 2847, rate: 22.2 },
    { stage: 'Form Submissions', visitors: 342, rate: 2.7 },
    { stage: 'Qualified Leads', visitors: 89, rate: 0.7 }
  ]
}
