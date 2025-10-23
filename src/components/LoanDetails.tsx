import { FileText, CreditCard, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoanDetails = () => {
  return (
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Loan Requirements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple requirements to get you approved quickly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileText className="w-6 h-6" />
                What You Need
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">★</span>
                  <div>
                    <p className="font-semibold text-lg">South African ID</p>
                    <p className="text-muted-foreground">Valid South African identification document</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">★</span>
                  <div>
                    <p className="font-semibold text-lg">Proof of Income</p>
                    <p className="text-muted-foreground">Recent payslip or proof of regular income</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">★</span>
                  <div>
                    <p className="font-semibold text-lg">3 Months Bank Statements</p>
                    <p className="text-muted-foreground">Recent bank statements for verification</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent shadow-xl">
            <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
              <CardTitle className="text-2xl flex items-center gap-3">
                <CreditCard className="w-6 h-6" />
                Loan Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Loan Amount Range</p>
                  <p className="text-3xl font-bold text-primary">R100 - R1,000</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Loan Term
                  </p>
                  <p className="text-3xl font-bold text-primary">1 Month</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary">
                  <p className="text-sm font-semibold text-primary mb-2">Quick Facts</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Fast approval process</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Same-day payout available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Use for any purpose</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanDetails;
