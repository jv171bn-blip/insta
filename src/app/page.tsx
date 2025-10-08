"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Packages from "@/components/sections/packages";
import SocialProof from "@/components/sections/social-proof";
import Testimonials from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <SocialProof />
        <HowItWorks />
        <div className="container mx-auto px-4 py-12 text-center">
          <Button onClick={scrollToHowItWorks} variant="outline" size="lg">
              Como Funciona? <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
