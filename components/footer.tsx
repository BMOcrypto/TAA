import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ],
  resources: [
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-[#101d4f] border-t border-[#2d4a8c]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image src="/taa-logo.png" alt="The Automation Architects Logo" width={180} height={60} className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-[#a0aec0] mb-4">Designing intelligent automation solutions for modern businesses</p>
            <p className="text-sm text-[#a0aec0]">Expert business process automation and workflow optimization</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a0aec0] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a0aec0] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@automationarchitects.com"
                  className="text-sm text-[#a0aec0] hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  hello@automationarchitects.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-sm text-[#a0aec0] hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-sm text-[#a0aec0] flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Remote-First
                  <br />
                  Serving Businesses Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-[#2d4a8c] pt-8 mb-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0aec0] hover:text-white transition-colors"
              >
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2d4a8c] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#a0aec0]">© {new Date().getFullYear()} The Automation Architects. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#a0aec0] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
