import Chatbot from "@/components/chatbot";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Packages from "@/components/sections/packages";
import SocialProof from "@/components/sections/social-proof";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Packages />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
