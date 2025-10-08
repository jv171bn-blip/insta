"use client";

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
import { PackageProvider, usePackage } from "@/contexts/PackageContext";

function PageContent() {
  const { isPackageSelected } = usePackage();
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <ComboPackages />
        <CustomPackages />
        <SocialProof />
        <HowItWorks />
        {isPackageSelected && <Testimonials />}
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}


export default function Home() {
  return (
    <PackageProvider>
      <PageContent />
    </PackageProvider>
  );
}
