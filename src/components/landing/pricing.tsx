import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Crown, Sparkles } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for occasional traders",
    price: "0.25%",
    icon: Zap,
    features: [
      "Standard trading fee: 0.25%",
      "Access to 500+ cryptocurrencies",
      "Basic customer support",
      "No KYC required",
      "Instant swaps",
      "Mobile app access"
    ],
    isPopular: false,
    buttonText: "Start Trading",
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    description: "Best value for active traders",
    price: "0.1%",
    icon: Crown,
    features: [
      "Reduced trading fee: 0.1%",
      "Priority customer support",
      "Advanced trading tools",
      "API access",
      "Volume discounts",
      "Early access to new features",
      "Dedicated account manager"
    ],
    isPopular: true,
    buttonText: "Go Pro",
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    description: "Custom solutions for institutions",
    price: "Custom",
    icon: Sparkles,
    features: [
      "Negotiable trading fees",
      "White-label solutions",
      "Dedicated infrastructure",
      "Custom integrations",
      "24/7 premium support",
      "Compliance assistance",
      "Custom reporting"
    ],
    isPopular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const
  }
]

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Choose the plan that fits your trading style. All plans include our core features
            with no hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.isPopular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className={`text-center ${plan.isPopular ? 'pt-8' : 'pt-6'}`}>
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.isPopular ? 'bg-primary/10' : 'bg-secondary'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.isPopular ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-lg font-normal text-muted-foreground ml-1">
                        per trade
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Button
                  className="w-full"
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>

                <div className="space-y-3">
                  <div className="font-medium">Features included:</div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-secondary/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">All plans include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>No monthly fees</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>No withdrawal limits</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>24/7 trading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}