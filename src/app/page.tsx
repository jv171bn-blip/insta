import Footer from "@/components/footer";
import Header from "@/components/header";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Packages from "@/components/sections/packages";
import SocialProof from "@/components/sections/social-proof";
import Testimonials from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <SocialProof />
        <div className="container mx-auto px-4 py-12 text-center">
            <Button asChild variant="outline">
                <Link href="/como-funciona">
                    Como Funciona? <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
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
