import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Case Studies - Automation Success Stories | The Automation Architects",
  description:
    "Discover how we've helped businesses achieve remarkable efficiency with intelligent automation. Real results from our process automation and integration projects.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "TechFlow Solutions: 300% Efficiency Increase",
      industry: "Technology",
      company: "TechFlow Solutions",
      challenge: "Manual data entry processes consuming 40+ hours per week",
      solution: "Complete process automation with smart workflows and system integrations",
      results: [
        { metric: "Efficiency Gain", value: "+300%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Processing Time", value: "-45%", icon: <Clock className="h-5 w-5" /> },
        { metric: "Cost Savings", value: "+180%", icon: <DollarSign className="h-5 w-5" /> },
        { metric: "Team Productivity", value: "+65%", icon: <Users className="h-5 w-5" /> },
      ],
      image: "/placeholder.svg?height=400&width=600",
      testimonial:
        "The team's expertise in automation was exceptional. They eliminated 40 hours of manual work per week in just 6 months.",
      clientName: "Sarah Johnson",
      clientRole: "Operations Director",
    },
    {
      title: "GrowthLab Inc: Sales Process Automation",
      industry: "Consulting",
      company: "GrowthLab Inc",
      challenge: "Disconnected systems and manual sales processes causing delays",
      solution: "CRM automation with custom pipelines, automated workflows, and advanced reporting",
      results: [
        { metric: "Sales Productivity", value: "+85%", icon: <Users className="h-5 w-5" /> },
        { metric: "Deal Closure Rate", value: "+40%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Pipeline Visibility", value: "100%", icon: <DollarSign className="h-5 w-5" /> },
        { metric: "Reporting Time", value: "-70%", icon: <Clock className="h-5 w-5" /> },
      ],
      image: "/placeholder.svg?height=400&width=600",
      testimonial:
        "Outstanding service and results. Our sales team productivity improved dramatically after their automation implementation.",
      clientName: "Michael Chen",
      clientRole: "CEO",
    },
    {
      title: "ScaleUp Ventures: Marketing Automation Success",
      industry: "SaaS",
      company: "ScaleUp Ventures",
      challenge: "Manual marketing processes and poor lead nurturing",
      solution: "Advanced marketing automation with lead scoring, email sequences, and behavioral triggers",
      results: [
        { metric: "Email Open Rate", value: "+120%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Lead Quality", value: "+90%", icon: <Users className="h-5 w-5" /> },
        { metric: "Marketing ROI", value: "+250%", icon: <DollarSign className="h-5 w-5" /> },
        { metric: "Time Saved", value: "20hrs/week", icon: <Clock className="h-5 w-5" /> },
      ],
      image: "/placeholder.svg?height=400&width=600",
      testimonial:
        "Professional, knowledgeable, and results-driven. They truly understand how to maximize automation's potential.",
      clientName: "Emily Rodriguez",
      clientRole: "VP of Sales",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eaeff5] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-[#eaeff5] text-[#101d4f] border border-[#d1d9e6] mb-4">
              Proven Results
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#101d4f] mb-6">
              Success Stories That Speak Volumes
            </h1>
            <p className="text-xl text-[#4a5568] mb-8">
              Discover how we've helped businesses like yours achieve remarkable efficiency through strategic
              automation implementations and optimizations.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div>
                    <Badge variant="outline" className="mb-3 border-[#d1d9e6] text-[#101d4f]">
                      {study.industry}
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-4">
                      {study.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-[#101d4f] mb-2">Challenge</h3>
                      <p className="text-[#4a5568]">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#101d4f] mb-2">Solution</h3>
                      <p className="text-[#4a5568]">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-[#eaeff5] p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="text-[#121b60]">{result.icon}</div>
                          <span className="text-sm text-[#4a5568]">{result.metric}</span>
                        </div>
                        <div className="text-2xl font-bold text-[#101d4f]">{result.value}</div>
                      </div>
                    ))}
                  </div>

                  <Card className="border-l-4 border-l-[#121b60] bg-[#eaeff5]">
                    <CardContent className="p-6">
                      <p className="text-[#101d4f] italic mb-4">"{study.testimonial}"</p>
                      <div>
                        <div className="font-semibold text-[#101d4f]">{study.clientName}</div>
                        <div className="text-sm text-[#4a5568]">
                          {study.clientRole}, {study.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={`${study.company} case study`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#eaeff5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-4">Our Track Record</h2>
            <p className="text-xl text-[#4a5568]">Numbers that demonstrate our commitment to client success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Automations Built" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "250%", label: "Average ROI Increase" },
              { number: "24hrs", label: "Average Response Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#121b60] mb-2">{stat.number}</div>
                <div className="text-[#4a5568]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#101d4f]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-[#a0aec0] mb-8">
              Join the growing list of businesses that have transformed their operations with our automation expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#101d4f] hover:bg-[#eaeff5]" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#101d4f] bg-transparent"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
