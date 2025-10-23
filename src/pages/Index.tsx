import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LoanDetails from "@/components/LoanDetails";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <LoanDetails />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
