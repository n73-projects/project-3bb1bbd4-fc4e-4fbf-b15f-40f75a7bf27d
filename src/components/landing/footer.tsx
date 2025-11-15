import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Twitter,
  Github,
  MessageCircle,
  Mail,
  Shield,
  Zap,
  Globe
} from "lucide-react"

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Trade", href: "#" },
      { name: "Swap", href: "#" },
      { name: "API", href: "#" },
      { name: "Fees", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
      { name: "Bug Report", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ]
  }
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "#", label: "Email" },
]

const features = [
  { icon: Shield, text: "No KYC Required" },
  { icon: Zap, text: "0.1% Trading Fee" },
  { icon: Globe, text: "500+ Cryptocurrencies" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 py-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">CryptoSwap</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The most trusted platform for buying and swapping cryptocurrency with
              zero hassle and maximum privacy.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  <feature.icon className="h-3 w-3" />
                  {feature.text}
                </Badge>
              ))}
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 CryptoSwap. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-sm text-muted-foreground">
              Built with ❤️ for the crypto community
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}