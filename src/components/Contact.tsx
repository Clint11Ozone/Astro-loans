import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleCall = () => {
    window.location.href = "tel:0729809450";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27828372206", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ready to Apply?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us today and get your loan approved
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-glow text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Contact Us Now</h3>
              <p className="text-lg opacity-90">We're here to help you get the funds you need</p>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Button 
                  size="lg" 
                  className="h-auto py-6 text-lg flex flex-col items-center gap-2 bg-primary hover:bg-primary/90"
                  onClick={handleCall}
                >
                  <Phone className="w-8 h-8" />
                  <span>Call Us</span>
                  <span className="font-bold text-xl">072 980 9450</span>
                </Button>

                <Button 
                  size="lg" 
                  className="h-auto py-6 text-lg flex flex-col items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-8 h-8" />
                  <span>WhatsApp Us</span>
                  <span className="font-bold text-xl">082 837 2206</span>
                </Button>
              </div>

              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>South Africa</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Available Monday - Friday: 9:00 AM - 5:00 PM</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent">
                <p className="text-center text-sm text-muted-foreground">
                  Astro Loans is an NCR-registered credit provider.
                  <br />
                  Terms & Conditions apply. Representative example available on request.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
