import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Settings, BarChart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Automation Services - Process Automation, Integration & Optimization",
  description:
    "Comprehensive automation services including process automation, system integration, workflow optimization, and training. Get expert help from The Automation Architects.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Settings,
      title: "Process Automation",
      description: "Design and implement intelligent workflows that eliminate manual tasks and boost productivity.",
      features: [
        "Workflow design and setup",
        "Task automation configuration",
        "Business rule implementation",
        "Approval process automation",
        "Document generation",
        "Notification systems",
      ],
      pricing: "Starting at $2,500",
    },
    {
      icon: Users,
      title: "CRM Optimization",
      description: "Streamline your customer relationships with automated pipelines and smart sequences.",
      features: [
        "Sales pipeline automation",
        "Deal stage optimization",
        "Contact management automation",
        "Task and activity triggers",
        "Automated reporting",
        "Team workflow configuration",
      ],
      pricing: "Starting at $1,800",
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Create sophisticated marketing campaigns with lead nurturing and behavioral triggers.",
      features: [
        "Lead nurturing workflows",
        "Email marketing automation",
        "Behavioral trigger setup",
        "Lead scoring systems",
        "Social media automation",
        "Campaign orchestration",
      ],
      pricing: "Starting at $3,200",
    },
    {
      icon: Award,
      title: "System Integration",
      description: "Connect your tools and platforms for seamless data flow across your entire tech stack.",
      features: [
        "Third-party app integrations",
        "Custom API connections",
        "Data migration services",
        "Webhook configuration",
        "iPaaS automation setup",
        "Database synchronization",
      ],
      pricing: "Starting at $2,000",
    },
    {
      icon: TrendingUp,
      title: "Training & Support",
      description: "Comprehensive team training and ongoing support to maximize your automation investment.",
      features: [
        "Team training sessions",
        "Best practices workshops",
        "Ongoing support packages",
        "Documentation creation",
        "Video tutorial library",
        "Monthly optimization reviews",
      ],
      pricing: "Starting at $1,200",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Custom dashboards and analytics to track performance and optimize your operations.",
      features: [
        "Custom dashboard creation",
        "KPI tracking setup",
        "Performance reporting",
        "Process analytics",
        "Efficiency optimization",
        "Monthly analytics reviews",
      ],
      pricing: "Starting at $1,500",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eaeff5] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-[#eaeff5] text-[#101d4f] border border-[#d1d9e6] mb-4">
              Business Process Automation Experts
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#101d4f] mb-6">
              Comprehensive Automation Services
            </h1>
            <p className="text-xl text-[#4a5568] mb-8">
              From initial implementation to advanced optimization, we provide end-to-end automation solutions that drive
              real business results.
            </p>
            <Button
              size="lg"
              className="bg-[#101d4f] hover:bg-[#121b60] text-white"
              asChild
            >
              <Link href="/contact">
                Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-[#d1d9e6] shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-[#121b60]" />
                  </div>
                  <CardTitle className="text-2xl mb-2 text-[#101d4f]">{service.title}</CardTitle>
                  <CardDescription className="text-[#4a5568] text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#121b60] flex-shrink-0" />
                        <span className="text-[#4a5568]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-[#d1d9e6]">
                    <div className="text-lg font-semibold text-[#101d4f]">{service.pricing}</div>
                    <Button variant="outline" size="sm" className="border-[#101d4f] text-[#101d4f] hover:bg-[#eaeff5]" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#eaeff5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-4">Our Proven Process</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              We follow a structured approach to ensure successful automation implementations and optimizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                description: "We analyze your current processes and identify automation opportunities.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Create a customized automation roadmap aligned with your objectives.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the plan with precision, ensuring best practices throughout.",
              },
              {
                step: "04",
                title: "Training & Support",
                description: "Provide comprehensive training and ongoing support for your team.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#101d4f] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-[#101d4f] mb-3">{process.title}</h3>
                <p className="text-[#4a5568]">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#101d4f]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-[#a0aec0] mb-8">
              Let's discuss your automation needs and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#101d4f] hover:bg-[#eaeff5]" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#101d4f] bg-transparent"
                asChild
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
