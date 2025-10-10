"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Cta from "@/components/sections/cta";
import ComboPackages from "@/components/sections/combo-packages";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Packages from "@/components/sections/packages";
import SocialProof from "@/components/sections/social-proof";
import Testimonials from "@/components/sections/testimonials";
import CustomPackages from "@/components/sections/custom-packages";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  const handleStartCheckout = (url: string) => {
    setCheckoutUrl(url);
  };

  const handleBackToSite = () => {
    setCheckoutUrl(null);
  };

  if (checkoutUrl) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <Header />
        <div className="flex-1 flex flex-col p-4">
          <div className="mb-4">
            <Button variant="outline" onClick={handleBackToSite}>
              &larr; Voltar para o site
            </Button>
          </div>
          <iframe
            src={checkoutUrl}
            className="w-full h-full border-0 rounded-md flex-1"
            title="Checkout"
          ></iframe>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <ComboPackages onStartCheckout={handleStartCheckout} />
        <Packages onStartCheckout={handleStartCheckout} />
        <CustomPackages />
        <SocialProof />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
