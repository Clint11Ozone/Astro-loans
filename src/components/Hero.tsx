import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-glow to-primary overflow-hidden pt-20">
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 opacity-20">
        <Star className="w-24 h-24 fill-accent text-accent animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Star className="w-32 h-32 fill-accent text-accent animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-10">
        <Star className="w-16 h-16 fill-accent text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 flex justify-center">
            <Star className="w-20 h-20 fill-accent text-accent animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            INSTANT LOANS
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-8 text-accent">
            GET APPROVED TODAY
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-accent">★</span>
              <span>Fast decisions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">★</span>
              <span>Same-day payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">★</span>
              <span>Any purpose</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-accent rounded-lg p-8 mb-8 inline-block">
            <p className="text-accent text-xl font-bold mb-2">LOAN AMOUNTS:</p>
            <p className="text-4xl font-bold mb-4">R100 - R1,000</p>
            <p className="text-accent text-xl font-bold mb-2">TERM:</p>
            <p className="text-2xl font-semibold">1 month</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto"
              onClick={scrollToContact}
            >
              APPLY NOW
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary"
              onClick={scrollToContact}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
