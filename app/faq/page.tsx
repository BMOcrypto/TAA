import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Pipeline Solutions Group FAQ",
  description:
    "Find answers to common questions about our HubSpot consulting services, implementation process, pricing, and support. Get the information you need to make informed decisions.",
  keywords: "HubSpot FAQ, consulting questions, implementation process, pricing, support",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Services",
      questions: [
        {
          question: "What HubSpot services do you offer?",
          answer:
            "We offer comprehensive HubSpot services including initial implementation, CRM optimization, marketing automation setup, sales process optimization, custom integrations, team training, and ongoing support. Our certified experts can handle everything from basic setup to advanced customizations.",
        },
        {
          question: "How long does a typical HubSpot implementation take?",
          answer:
            "Implementation timelines vary based on complexity and scope. A basic setup typically takes 2-4 weeks, while comprehensive implementations with custom workflows, integrations, and data migration can take 6-12 weeks. We provide detailed project timelines during our initial consultation.",
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer:
            "Yes, we work with businesses of all sizes, from startups to enterprise organizations. Our approach is tailored to each client's specific needs, budget, and growth stage. We have experience across various industries and business models.",
        },
        {
          question: "What makes your agency different from other HubSpot consultants?",
          answer:
            "Our team consists of certified HubSpot experts with proven track records. We focus on measurable results, provide transparent communication, and offer ongoing support. Our approach combines strategic thinking with technical expertise to deliver solutions that drive real business growth.",
        },
      ],
    },
    {
      title: "Implementation Process",
      questions: [
        {
          question: "What's included in your HubSpot implementation process?",
          answer:
            "Our implementation process includes discovery and audit, strategic planning, portal setup and configuration, data migration, workflow creation, integration setup, team training, testing, and go-live support. We also provide documentation and ongoing support.",
        },
        {
          question: "Do you help with data migration from other systems?",
          answer:
            "Yes, we specialize in data migration from various CRM and marketing platforms including Salesforce, Pipedrive, Mailchimp, and others. We ensure data integrity and provide mapping strategies to maintain historical information and relationships.",
        },
        {
          question: "Can you integrate HubSpot with our existing tools?",
          answer:
            "Absolutely. We have extensive experience integrating HubSpot with popular business tools including Salesforce, Zapier, Slack, WordPress, Shopify, and many others. We can also create custom integrations using HubSpot's API when needed.",
        },
        {
          question: "What happens if we need changes after implementation?",
          answer:
            "We provide ongoing support and optimization services. Minor adjustments are often included in our support packages, while larger changes or new features can be handled through additional project work. We're committed to your long-term success.",
        },
      ],
    },
    {
      title: "Pricing & Investment",
      questions: [
        {
          question: "How much do your HubSpot consulting services cost?",
          answer:
            "Our pricing varies based on project scope and complexity. Basic implementations start at $2,500, while comprehensive projects can range from $5,000 to $50,000+. We provide detailed quotes after understanding your specific needs during our free consultation.",
        },
        {
          question: "Do you offer ongoing support packages?",
          answer:
            "Yes, we offer various ongoing support packages including monthly optimization reviews, technical support, training sessions, and strategic consulting. Packages start at $1,200/month and can be customized based on your needs.",
        },
        {
          question: "Is there a minimum contract length?",
          answer:
            "For implementation projects, there's no minimum contract length - we work on a project basis. For ongoing support, we typically recommend a 3-month minimum to see meaningful results, but we can discuss flexible arrangements based on your needs.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, for larger projects, we can arrange payment plans with milestones tied to project deliverables. We typically require 50% upfront with the remainder split across project phases. We're flexible and can discuss options that work for your budget.",
        },
      ],
    },
    {
      title: "Training & Support",
      questions: [
        {
          question: "Do you provide training for our team?",
          answer:
            "Yes, comprehensive team training is included in all our implementation packages. We provide role-specific training for different team members, create custom documentation, and offer ongoing training sessions as needed.",
        },
        {
          question: "What kind of ongoing support do you provide?",
          answer:
            "We offer various levels of ongoing support including technical assistance, optimization recommendations, monthly reviews, additional training, and strategic consulting. Our support packages are designed to ensure your continued success with HubSpot.",
        },
        {
          question: "How quickly do you respond to support requests?",
          answer:
            "Our standard response time is within 24 hours for most requests. For urgent issues, we offer priority support with response times of 2-4 hours. Emergency support is available for critical issues that impact business operations.",
        },
        {
          question: "Can you help us become more self-sufficient with HubSpot?",
          answer:
            "Absolutely. Our goal is to empower your team to manage HubSpot effectively. We provide comprehensive training, documentation, and best practices to help you become self-sufficient while remaining available for complex projects and strategic guidance.",
        },
      ],
    },
    {
      title: "Technical Questions",
      questions: [
        {
          question: "What HubSpot hubs do you work with?",
          answer:
            "We work with all HubSpot hubs including Marketing Hub, Sales Hub, Service Hub, CMS Hub, and Operations Hub. Our team has certifications across all hubs and can help you determine which combination best fits your needs.",
        },
        {
          question: "Do you work with HubSpot's free tools?",
          answer:
            "Yes, we can help optimize HubSpot's free tools and create upgrade strategies as your business grows. We'll help you maximize the free features while planning for future paid hub implementations.",
        },
        {
          question: "Can you help with custom development and advanced features?",
          answer:
            "Yes, our team includes HubSpot developers who can create custom modules, templates, workflows, and integrations. We can handle complex customizations and advanced automation requirements.",
        },
        {
          question: "What if we're already using HubSpot but need optimization?",
          answer:
            "We offer HubSpot audits and optimization services for existing users. We'll review your current setup, identify improvement opportunities, and implement optimizations to improve performance and ROI.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground mb-4 font-montserrat">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Get Answers to Your HubSpot Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about our HubSpot consulting services, implementation process, and
              support options. Can't find what you're looking for? We're here to help.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
              asChild
            >
              <Link href="/contact">
                Ask a Question <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-montserrat">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary font-montserrat">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
              Why Choose Our HubSpot Expertise
            </h2>
            <p className="text-xl text-muted-foreground">Numbers that demonstrate our commitment to client success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Implementations" },
              { number: "98%", label: "Client Satisfaction Rate" },
              { number: "24hrs", label: "Average Response Time" },
              { number: "50+", label: "HubSpot Certifications" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 font-montserrat">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground">We're here to help you find the right HubSpot solution</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-border shadow-lg text-center bg-card">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-montserrat">Live Chat</CardTitle>
                <CardDescription>Get instant answers to your questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg text-center bg-card">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-montserrat">Phone Consultation</CardTitle>
                <CardDescription>Schedule a free 30-minute call</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
                  asChild
                >
                  <Link href="tel:+1234567890">Call (123) 456-7890</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg text-center bg-card">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-montserrat">Email Support</CardTitle>
                <CardDescription>Send us your detailed questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
                  asChild
                >
                  <Link href="/contact">Send Message</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8">
              Schedule a free consultation to discuss your HubSpot needs and get expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-montserrat" asChild>
                <Link href="/contact">
                  Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-montserrat"
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
