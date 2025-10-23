import { FileCheck, Clock, Banknote } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: FileCheck,
      number: "1",
      title: "Apply Online",
      description: "Fill out our simple application form with your details and requirements"
    },
    {
      icon: Clock,
      number: "2",
      title: "Get Approved",
      description: "Receive a fast decision on your loan application within minutes"
    },
    {
      icon: Banknote,
      number: "3",
      title: "Receive Funds",
      description: "Get your money deposited directly into your account the same day"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your loan in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-primary to-primary-glow text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <step.icon className="w-12 h-12" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl border-4 border-background">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
