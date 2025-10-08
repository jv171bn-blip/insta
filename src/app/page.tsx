"use client";

import { useState } from "react";
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
import { ChevronRight, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Home() {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <SocialProof />

        <Collapsible
          open={isHowItWorksOpen}
          onOpenChange={setIsHowItWorksOpen}
          className="w-full"
        >
          <div className="container mx-auto px-4 py-12 text-center">
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="lg">
                Como Funciona?
                {isHowItWorksOpen ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <HowItWorks />
          </CollapsibleContent>
        </Collapsible>

        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
