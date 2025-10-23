import { CheckCircle, Lock, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Quick Approval",
      description: "Get your loan approved in minutes with our fast decision process"
    },
    {
      icon: Lock,
      title: "Secure & Confidential",
      description: "Your information is protected with bank-level security"
    },
    {
      icon: CreditCard,
      title: "Flexible Repayments",
      description: "Choose a repayment plan that works for your budget"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Astro Loans?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make getting a loan simple, fast, and secure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
