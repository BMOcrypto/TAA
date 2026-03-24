import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About Us - The Automation Architects Team",
  description:
    "Meet our automation experts. Learn about our mission, values, and commitment to helping businesses achieve efficiency through intelligent process automation.",
}

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Lead Architect",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Automation expert with 8+ years of experience helping businesses scale through strategic process automation and system integrations.",
      certifications: ["Process Automation Expert", "Systems Integration", "Workflow Design"],
    },
    {
      name: "Michael Chen",
      role: "Senior Automation Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technical expert specializing in complex system integrations and custom workflow development with 6+ years of experience.",
      certifications: ["API Integration", "Workflow Automation", "Data Engineering"],
    },
    {
      name: "Emily Rodriguez",
      role: "Process Optimization Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations strategist focused on creating efficient automation workflows and eliminating manual processes.",
      certifications: ["Process Mapping", "Lean Six Sigma", "Business Analysis"],
    },
    {
      name: "David Park",
      role: "Analytics & Integration Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Data-driven consultant specializing in custom reporting, system analytics, and performance optimization.",
      certifications: ["Data Analytics", "Business Intelligence", "System Monitoring"],
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#121b60]" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business efficiency and ROI.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#121b60]" />,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team to achieve your goals.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#121b60]" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to implementation.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#121b60]" />,
      title: "Transparency",
      description: "Clear communication, honest feedback, and transparent reporting throughout every project.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eaeff5] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-[#eaeff5] text-[#101d4f] border border-[#d1d9e6]">
                About The Automation Architects
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#101d4f]">Your Trusted Automation Partners</h1>
              <p className="text-xl text-[#4a5568] leading-relaxed">
                We're a team of automation experts dedicated to helping businesses unlock their full efficiency
                potential through strategic process automation, system integrations, and ongoing optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#101d4f] hover:bg-[#121b60] text-white" asChild>
                  <Link href="/contact">
                    Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#101d4f] text-[#101d4f] hover:bg-[#eaeff5]" asChild>
                  <Link href="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/taa-logo.png"
                alt="The Automation Architects"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-6">Our Mission & Values</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              We believe every business deserves to reach its full potential. Our mission is to empower organizations
              with intelligent automation solutions that drive sustainable efficiency and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-[#d1d9e6] shadow-lg text-center bg-white">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-[#101d4f]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#4a5568]">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#eaeff5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              Our automation professionals bring years of experience and proven expertise to every project,
              ensuring your success at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border border-[#d1d9e6] shadow-lg text-center bg-white">
                <CardHeader className="pb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-[#101d4f]">{member.name}</CardTitle>
                  <CardDescription className="text-[#121b60] font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#4a5568] text-sm">{member.bio}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#101d4f]">Expertise:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs bg-[#eaeff5] text-[#101d4f]">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f]">Our Story</h2>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                Founded in 2019, The Automation Architects emerged from a simple observation: businesses were struggling
                with inefficient manual processes and disconnected systems. Our founders, having worked with hundreds of
                companies across various industries, recognized the transformative power of intelligent automation.
              </p>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                What started as a small consulting practice has grown into a comprehensive automation solutions provider,
                helping over 500 businesses transform their operations. Our success is measured not just in automations
                deployed, but in the hours saved and efficiency gains our clients achieve.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#101d4f] mb-2">Our Mission</h3>
                  <p className="text-[#4a5568]">
                    To empower businesses of all sizes to achieve sustainable efficiency through strategic automation
                    solutions that deliver measurable results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#101d4f] mb-2">Our Vision</h3>
                  <p className="text-[#4a5568]">
                    To be the most trusted automation partner, known for delivering exceptional results and
                    building long-term relationships with our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/taa-logo.png"
                alt="The Automation Architects"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-[#eaeff5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-6">Expertise & Capabilities</h2>
            <p className="text-xl text-[#4a5568]">
              Our expertise is validated by years of experience and successful implementations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Process Automation",
                description: "Expert workflow design and implementation",
                icon: <Award className="h-12 w-12 text-[#121b60]" />,
              },
              {
                title: "500+ Automations",
                description: "Successful implementations delivered",
                icon: <CheckCircle className="h-12 w-12 text-[#121b60]" />,
              },
              {
                title: "System Integration",
                description: "Seamless platform connectivity",
                icon: <Users className="h-12 w-12 text-[#121b60]" />,
              },
              {
                title: "Custom Development",
                description: "Tailored automation solutions",
                icon: <Target className="h-12 w-12 text-[#121b60]" />,
              },
            ].map((cert, index) => (
              <Card key={index} className="border border-[#d1d9e6] shadow-lg text-center bg-white">
                <CardHeader>
                  <div className="mx-auto mb-4">{cert.icon}</div>
                  <CardTitle className="text-lg text-[#101d4f]">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#4a5568]">{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101d4f] mb-6">Our Impact by the Numbers</h2>
            <p className="text-xl text-[#4a5568]">
              Trusted by businesses worldwide to deliver exceptional automation results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Automations Built",
                description: "Successful implementations across industries",
              },
              { number: "98%", label: "Client Satisfaction", description: "Consistently exceeding expectations" },
              { number: "5+", label: "Years Experience", description: "Deep expertise in automation" },
              { number: "10K+", label: "Hours Saved", description: "Time returned to our clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#121b60] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-[#101d4f] mb-2">{stat.label}</div>
                <div className="text-[#4a5568] text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#101d4f]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-[#a0aec0] mb-8">
              Let's discuss how our expertise can help transform your business with intelligent automation.
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
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
