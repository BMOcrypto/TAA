"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d1d9e6] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* TAA Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/taa-logo.png"
              alt="The Automation Architects"
              width={180}
              height={60}
              className="w-auto h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#121b60] ${
                  pathname === item.href ? "text-[#121b60] font-semibold" : "text-[#101d4f]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-[#101d4f] hover:text-[#121b60] hover:bg-[#eaeff5]" asChild>
              <Link href="tel:+1234567890">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </Link>
            </Button>
            <Button size="sm" className="bg-[#101d4f] hover:bg-[#121b60] text-white" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-[#101d4f]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-[#121b60] ${
                      pathname === item.href ? "text-[#121b60] font-semibold" : "text-[#101d4f]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-[#101d4f] hover:bg-[#eaeff5]" asChild>
                    <Link href="tel:+1234567890">
                      <Phone className="h-4 w-4 mr-2" />
                      (123) 456-7890
                    </Link>
                  </Button>
                  <Button className="w-full bg-[#101d4f] hover:bg-[#121b60] text-white" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
