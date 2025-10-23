import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-8 h-8 fill-accent text-accent" />
            <span className="text-2xl font-bold text-primary">Astro Loans</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("features")} className="text-foreground hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("details")} className="text-foreground hover:text-primary transition-colors">
              Loan Details
            </button>
            <button onClick={() => scrollToSection("process")} className="text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
