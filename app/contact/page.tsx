import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, CheckCircle, Users, Award, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - The Automation Architects",
  description:
    "Get in touch with The Automation Architects for a free consultation. We help businesses optimize their processes through intelligent automation solutions.",
  keywords: "automation contact, process automation consultation, workflow optimization, business automation, The Automation Architects",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaeff5] to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-[#101d4f] border-[#d1d9e6] bg-white">
              Get Started Today
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#101d4f] mb-6">
              Let's Transform Your{" "}
              <span className="text-[#121b60]">
                Business Operations
              </span>
            </h1>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Ready to streamline your processes with intelligent automation? Our experts are here to help you optimize
              operations and accelerate growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-2xl border border-[#d1d9e6] bg-white">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-[#101d4f]">
                  Start Your Automation Journey
                </CardTitle>
                <CardDescription className="text-[#4a5568]">
                  Fill out the form below and we'll get back to you within 24 hours with a customized strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-lg border border-[#d1d9e6] bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-[#101d4f]">
                    <Phone className="h-5 w-5 text-[#121b60]" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-[#4a5568]">
                    <Mail className="h-5 w-5 text-[#121b60] flex-shrink-0" />
                    <span>hello@theautomationarchitects.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4a5568]">
                    <Phone className="h-5 w-5 text-[#121b60] flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4a5568]">
                    <MapPin className="h-5 w-5 text-[#121b60] flex-shrink-0" />
                    <span>New York, NY & Remote Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4a5568]">
                    <Clock className="h-5 w-5 text-[#121b60] flex-shrink-0" />
                    <span>Mon-Fri: 9AM-6PM EST</span>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose The Automation Architects */}
              <Card className="shadow-lg border border-[#d1d9e6] bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-[#101d4f]">
                    <Award className="h-5 w-5 text-[#121b60]" />
                    Why Choose The Automation Architects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#121b60] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#101d4f]">Automation Experts</h4>
                      <p className="text-sm text-[#4a5568]">Our team holds advanced automation certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[#121b60] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#101d4f]">500+ Successful Projects</h4>
                      <p className="text-sm text-[#4a5568]">Proven track record across industries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-[#121b60] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#101d4f]">24-Hour Response Time</h4>
                      <p className="text-sm text-[#4a5568]">Quick turnaround on all inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Consultation CTA */}
              <Card className="shadow-lg border-0 bg-[#101d4f] text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">Free 30-Minute Consultation</h3>
                  <p className="text-[#a0aec0] mb-4">
                    Discover how automation can transform your business with a personalized strategy session.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4" />
                    <span>No commitment required</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
