import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react"
import { TradingForm } from "./trading-form"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 w-fit">
              <Shield className="h-4 w-4" />
              No KYC Required
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Trade Crypto with
                <span className="block text-primary">Zero Hassle</span>
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground md:text-2xl">
                Buy and swap cryptocurrency instantly with the lowest fees in the market.
                No registration, no verification, just pure trading freedom.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Lowest Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Anonymous Trading</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold">0.1%</div>
                <div className="text-sm text-muted-foreground">Trading Fee</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Cryptocurrencies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Trading Form */}
          <div className="flex justify-center lg:justify-end">
            <TradingForm />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  )
}