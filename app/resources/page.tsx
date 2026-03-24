import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Download, FileText, BookOpen, Video, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "HubSpot Resources - Free Guides, Templates & Best Practices",
  description:
    "Download free HubSpot resources including implementation guides, templates, checklists, and best practice documents. Expert insights to accelerate your HubSpot success.",
  keywords: "HubSpot resources, free guides, templates, checklists, best practices, implementation guides",
}

export default function ResourcesPage() {
  const featuredResources = [
    {
      title: "The Complete HubSpot Implementation Checklist",
      description:
        "A comprehensive 50-point checklist covering every aspect of HubSpot setup, from initial configuration to advanced automation workflows.",
      type: "Checklist",
      format: "PDF",
      pages: "12 pages",
      image: "/placeholder.svg?height=300&width=400",
      category: "Implementation",
      featured: true,
    },
    {
      title: "HubSpot ROI Calculator & Measurement Guide",
      description:
        "Calculate and track your HubSpot ROI with our comprehensive spreadsheet template and measurement framework.",
      type: "Template",
      format: "Excel + PDF",
      pages: "8 pages",
      image: "/placeholder.svg?height=300&width=400",
      category: "Analytics",
      featured: true,
    },
    {
      title: "Marketing Automation Workflow Templates",
      description:
        "Ready-to-use workflow templates for lead nurturing, customer onboarding, and re-engagement campaigns.",
      type: "Templates",
      format: "HubSpot Import",
      pages: "15 workflows",
      image: "/placeholder.svg?height=300&width=400",
      category: "Marketing",
      featured: true,
    },
  ]

  const resources = {
    guides: [
      {
        title: "HubSpot CRM Optimization Guide",
        description: "Step-by-step guide to optimize your CRM for maximum sales productivity and data accuracy.",
        type: "eBook",
        format: "PDF",
        pages: "24 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "CRM",
      },
      {
        title: "Lead Scoring Best Practices",
        description: "Master lead scoring with proven strategies and implementation frameworks.",
        type: "Guide",
        format: "PDF",
        pages: "16 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "Lead Management",
      },
      {
        title: "HubSpot Integration Playbook",
        description: "Connect HubSpot with your existing tools using our comprehensive integration guide.",
        type: "Playbook",
        format: "PDF",
        pages: "32 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "Integrations",
      },
      {
        title: "Sales Pipeline Optimization Manual",
        description: "Transform your sales process with proven pipeline optimization techniques.",
        type: "Manual",
        format: "PDF",
        pages: "28 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "Sales",
      },
    ],
    templates: [
      {
        title: "Email Marketing Templates Pack",
        description: "Professional email templates for every stage of the customer journey.",
        type: "Templates",
        format: "HubSpot Import",
        pages: "25 templates",
        image: "/placeholder.svg?height=200&width=300",
        category: "Marketing",
      },
      {
        title: "Landing Page Template Collection",
        description: "High-converting landing page templates for various industries and use cases.",
        type: "Templates",
        format: "HubSpot Import",
        pages: "12 templates",
        image: "/placeholder.svg?height=200&width=300",
        category: "Marketing",
      },
      {
        title: "Custom Property Setup Templates",
        description: "Pre-configured custom properties for different business types and industries.",
        type: "Templates",
        format: "CSV + Guide",
        pages: "Configuration guide",
        image: "/placeholder.svg?height=200&width=300",
        category: "CRM",
      },
      {
        title: "Reporting Dashboard Templates",
        description: "Ready-to-use dashboard templates for sales, marketing, and service teams.",
        type: "Templates",
        format: "HubSpot Import",
        pages: "8 dashboards",
        image: "/placeholder.svg?height=200&width=300",
        category: "Analytics",
      },
    ],
    checklists: [
      {
        title: "HubSpot Go-Live Checklist",
        description: "Ensure a smooth HubSpot launch with our comprehensive pre-launch checklist.",
        type: "Checklist",
        format: "PDF",
        pages: "6 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "Implementation",
      },
      {
        title: "Data Migration Checklist",
        description: "Step-by-step checklist for migrating data to HubSpot without losing critical information.",
        type: "Checklist",
        format: "PDF",
        pages: "8 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "Implementation",
      },
      {
        title: "Monthly HubSpot Maintenance Checklist",
        description: "Keep your HubSpot portal running smoothly with regular maintenance tasks.",
        type: "Checklist",
        format: "PDF",
        pages: "4 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "Maintenance",
      },
      {
        title: "HubSpot Security Audit Checklist",
        description: "Comprehensive security checklist to protect your HubSpot data and ensure compliance.",
        type: "Checklist",
        format: "PDF",
        pages: "10 pages",
        image: "/placeholder.svg?height=200&width=300",
        category: "Security",
      },
    ],
  }

  const webinars = [
    {
      title: "HubSpot Implementation Masterclass",
      description: "90-minute deep dive into HubSpot implementation best practices and common pitfalls to avoid.",
      duration: "90 minutes",
      format: "Video",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Advanced Marketing Automation Strategies",
      description: "Learn advanced automation techniques that drive results and improve customer experience.",
      duration: "60 minutes",
      format: "Video",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "HubSpot Reporting & Analytics Workshop",
      description: "Master HubSpot's reporting tools and create dashboards that drive business decisions.",
      duration: "75 minutes",
      format: "Video",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground mb-4 font-montserrat">
              Free Resources
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              HubSpot Resources & Best Practices
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access our comprehensive library of free guides, templates, checklists, and expert insights to accelerate
              your HubSpot success and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
                asChild
              >
                <Link href="#featured">Browse Resources</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-montserrat bg-transparent" asChild>
                <Link href="/contact">Get Custom Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="featured" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">Featured Resources</h2>
            <p className="text-xl text-muted-foreground">Our most popular and comprehensive HubSpot resources</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-primary/20">
                      {resource.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{resource.format}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight text-foreground font-montserrat">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">{resource.description}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>{resource.type}</span>
                    </div>
                    <span>{resource.pages}</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat">
                    <Download className="h-4 w-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">Resource Library</h2>
            <p className="text-xl text-muted-foreground">Explore our comprehensive collection of HubSpot resources</p>
          </div>

          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="guides" className="flex items-center space-x-2 font-montserrat">
                <BookOpen className="h-4 w-4" />
                <span>Guides & eBooks</span>
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center space-x-2 font-montserrat">
                <Settings className="h-4 w-4" />
                <span>Templates</span>
              </TabsTrigger>
              <TabsTrigger value="checklists" className="flex items-center space-x-2 font-montserrat">
                <FileText className="h-4 w-4" />
                <span>Checklists</span>
              </TabsTrigger>
              <TabsTrigger value="webinars" className="flex items-center space-x-2 font-montserrat">
                <Video className="h-4 w-4" />
                <span>Webinars</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guides">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.guides.map((resource, index) => (
                  <Card
                    key={index}
                    className="border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card"
                  >
                    <div className="relative h-32">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="outline" className="w-fit mb-2 border-primary/20">
                        {resource.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight text-foreground font-montserrat">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardDescription className="text-sm text-muted-foreground">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>{resource.pages}</span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
                      >
                        <Download className="h-3 w-3 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="templates">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.templates.map((resource, index) => (
                  <Card
                    key={index}
                    className="border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card"
                  >
                    <div className="relative h-32">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="outline" className="w-fit mb-2 border-primary/20">
                        {resource.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight text-foreground font-montserrat">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardDescription className="text-sm text-muted-foreground">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>{resource.pages}</span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
                      >
                        <Download className="h-3 w-3 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="checklists">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.checklists.map((resource, index) => (
                  <Card
                    key={index}
                    className="border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card"
                  >
                    <div className="relative h-32">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="outline" className="w-fit mb-2 border-primary/20">
                        {resource.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight text-foreground font-montserrat">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardDescription className="text-sm text-muted-foreground">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>{resource.pages}</span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
                      >
                        <Download className="h-3 w-3 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webinars">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webinars.map((webinar, index) => (
                  <Card
                    key={index}
                    className="border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card"
                  >
                    <div className="relative h-48">
                      <Image
                        src={webinar.image || "/placeholder.svg"}
                        alt={webinar.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-background bg-opacity-90 rounded-full flex items-center justify-center">
                          <Video className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl leading-tight text-foreground font-montserrat">
                        {webinar.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-muted-foreground">{webinar.description}</CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{webinar.format}</span>
                        <span>{webinar.duration}</span>
                      </div>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat">
                        <Video className="h-4 w-4 mr-2" />
                        Watch Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">Get New Resources First</h2>
            <p className="text-xl opacity-90 mb-8">
              Subscribe to our newsletter and be the first to access new guides, templates, and HubSpot insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-ring text-foreground"
              />
              <Button size="lg" variant="secondary" className="font-montserrat">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
