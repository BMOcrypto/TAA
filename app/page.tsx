import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#eaeff5] to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-[#eaeff5] text-[#101d4f] border border-[#d1d9e6]">
                  Business Process Automation Experts
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#101d4f] leading-tight">
                  Architect Your Business for Automated Success
                </h1>
                <p className="text-xl text-[#4a5568] leading-relaxed">
                  Transform your operations with intelligent automation solutions. We design and implement custom workflows, system integrations, and process optimizations that drive efficiency and growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#101d4f] hover:bg-[#121b60] text-white" asChild>
                  <Link href="/contact">
                    Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#101d4f] text-[#101d4f] hover:bg-[#eaeff5]" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#101d4f]">500+</div>
                  <div className="text-sm text-[#4a5568]">Automations Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#101d4f]">98%</div>
                  <div className="text-sm text-[#4a5568]">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#101d4f]">5+</div>
                  <div className="text-sm text-[#4a5568]">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/taa-logo.png"
                alt="The Automation Architects"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-4">Our Automation Services</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              From workflow design to system integration, we provide end-to-end automation solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-[#121b60]" />,
                title: "Process Automation",
                description:
                  "Design and implement intelligent workflows that eliminate manual tasks and boost productivity.",
              },
              {
                icon: <Users className="h-8 w-8 text-[#121b60]" />,
                title: "CRM Optimization",
                description:
                  "Streamline your customer relationships with automated pipelines and smart sequences.",
              },
              {
                icon: <Award className="h-8 w-8 text-[#121b60]" />,
                title: "Marketing Automation",
                description: "Create sophisticated marketing campaigns with lead nurturing and behavioral triggers.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-[#121b60]" />,
                title: "System Integration",
                description: "Connect your tools and platforms for seamless data flow across your entire tech stack.",
              },
              {
                icon: <Star className="h-8 w-8 text-[#121b60]" />,
                title: "Training & Support",
                description: "Comprehensive team training and ongoing support to maximize your automation investment.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-[#121b60]" />,
                title: "Analytics & Reporting",
                description: "Custom dashboards and analytics to track performance and optimize your operations.",
              },
            ].map((service, index) => (
              <Card key={index} className="border border-[#d1d9e6] shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-[#101d4f]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#4a5568]">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#101d4f] text-[#101d4f] hover:bg-[#eaeff5]" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-[#eaeff5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-[#4a5568]">
              Don't just take our word for it - hear from businesses we've helped transform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Operations Director",
                company: "TechFlow Solutions",
                content:
                  "The Automation Architects transformed our entire workflow. We've saved 40 hours per week on manual processes.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "CEO",
                company: "GrowthLab Inc",
                content:
                  "Outstanding expertise in automation. Our team productivity improved by 60% after their system integration work.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "VP of Operations",
                company: "ScaleUp Ventures",
                content:
                  "Professional, knowledgeable, and results-driven. They truly understand how to architect efficient systems.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border border-[#d1d9e6] shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#121b60] text-[#121b60]" />
                    ))}
                  </div>
                  <p className="text-[#4a5568] mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-[#101d4f]">{testimonial.name}</div>
                    <div className="text-sm text-[#4a5568]">{testimonial.role}</div>
                    <div className="text-sm text-[#121b60] font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#101d4f]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Automate Your Success?</h2>
            <p className="text-xl text-[#a0aec0] mb-8">
              Get a free consultation and discover how intelligent automation can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#101d4f] hover:bg-[#eaeff5]" asChild>
                <Link href="/contact">
                  Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#101d4f] bg-transparent"
                asChild
              >
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
