import Chatbot from "@/components/chatbot";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Cta from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Packages from "@/components/sections/packages";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <Cta />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
