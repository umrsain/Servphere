/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eqlPPbTwzVy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { auth } from "@/auth";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { colors } from "@/utils/colors"
import { Check } from "lucide-react"

export default async function Page() { 

    const session = await auth();
    const email = session.user?.email;

    const plans = [
        {
            link : "", 
            priceId : "",
            name : 'Free',
            description: "Perfect for individuals and small teams",
            price : 0,
            features : [
                "List up to 5 users",
                "Standard Support",
                "Manage Bookings",
                "Basic Features"
            ]
        },
        {
            link : 
            (process.env.NODE_ENV == "development") 
              ? "https://buy.stripe.com/test_28oaGug3JdrW3PabIM"
                : "", 
            priceId : 
              (process.env.NODE_ENV == "development") 
              ? "price_1Pwm5fIEWBlIFmthIgySFyg1"
              : "",
            name : 'Pro',
            price : 19.99,
            description: "Ideal for growing businesses",
            features : [
                "List unlimited services",
                "Custom branding",
                "Detailed analytics",
                "Priority support",
                "Sell Digital Products"
                
            ]
        },
    ]
  return (
       <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Pricing Plans</h1>
            <p className="text-muted-foreground">Choose the plan that fits your needs.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 items-start">
          {plans.map((plan, index) => (
            <Card key={index} className="p-6 grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <ul className="grid h-[10rem] gap-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check color={colors.lightGrey} className="w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                target="_blank"
                href= {
                  plan.link 
                    ? plan.link + "?prefilled_email=" + session?.user?.email
                    : ""
                }>
                <Button size="lg" className="w-full">
                  Get Started
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
