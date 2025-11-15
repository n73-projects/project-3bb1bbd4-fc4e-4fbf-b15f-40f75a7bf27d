import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Zap,
  DollarSign,
  Globe,
  Lock,
  RefreshCw,
  TrendingUp,
  Clock,
  Users
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "No KYC Required",
    description: "Trade anonymously without providing personal information. Your privacy is our priority.",
    badge: "Anonymous"
  },
  {
    icon: DollarSign,
    title: "Lowest Fees",
    description: "Enjoy industry-leading low fees starting from just 0.1% per transaction.",
    badge: "0.1% Fee"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in seconds with our optimized infrastructure and advanced algorithms.",
    badge: "Instant"
  },
  {
    icon: Globe,
    title: "500+ Cryptocurrencies",
    description: "Access a wide variety of digital assets including Bitcoin, Ethereum, and altcoins.",
    badge: "Diverse"
  },
  {
    icon: Lock,
    title: "Secure Trading",
    description: "Advanced security measures protect your assets with multi-layer encryption.",
    badge: "Secure"
  },
  {
    icon: RefreshCw,
    title: "Easy Swaps",
    description: "Seamlessly swap between different cryptocurrencies with our intuitive interface.",
    badge: "Simple"
  }
]

const stats = [
  {
    icon: TrendingUp,
    value: "$2.5B+",
    label: "Total Volume Traded"
  },
  {
    icon: Clock,
    value: "< 30s",
    label: "Average Trade Time"
  },
  {
    icon: Users,
    value: "100K+",
    label: "Active Traders"
  }
]

export function Features() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Our Platform?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Experience the future of cryptocurrency trading with our cutting-edge platform
            designed for privacy, speed, and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}