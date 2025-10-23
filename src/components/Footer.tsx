import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Star className="w-8 h-8 fill-accent text-accent" />
            <span className="text-2xl font-bold">Astro Loans</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-90 mb-2">
              NCR-registered credit provider
            </p>
            <p className="text-xs opacity-75">
              © {new Date().getFullYear()} Astro Loans. All rights reserved.
            </p>
            <p className="text-xs opacity-75 mt-1">
              Terms & Conditions apply. Lending criteria, fees, and charges apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
