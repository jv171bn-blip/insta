"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M19.05 4.94A10 10 0 0 0 12 2a10 10 0 0 0-9.94 11.05c0 1.77.46 3.45 1.32 4.95L2 22l5.05-1.32c1.5.86 3.18 1.32 4.95 1.32h.01a10 10 0 0 0 7.04-2.94 10 10 0 0 0 2.94-7.04 10 10 0 0 0-2.95-7.07zM12 20.01h-.01c-1.55 0-3.04-.42-4.34-1.18l-.31-.18-3.23.85.87-3.15-.2-.33a8.01 8.01 0 0 1-1.26-4.17 8.01 8.01 0 0 1 8.01-8.01 8.01 8.01 0 0 1 8.01 8.01 8.01 8.01 0 0 1-8.01 8.01zM16.53 13.96c-.18-.09-1.08-.53-1.25-.59-.17-.06-.29-.09-.42.09-.12.18-.47.59-.58.71-.11.12-.22.13-.41.04-.19-.09-1.08-.4-2.06-1.28-.76-.69-1.28-1.54-1.43-1.8-.15-.26-.01-.4.08-.53.08-.12.18-.29.27-.42.09-.12.12-.2.18-.34.06-.14.03-.26 0-.35s-.42-.51-.58-.7c-.15-.19-.31-.16-.42-.16-.1 0-.22 0-.34.01-.12.01-.3.04-.46.22-.16.18-.61.6-.61 1.47s.63 1.71.71 1.83c.09.12 1.23 1.88 3 2.6.43.18.76.29.98.37.5.18.94.15 1.28.09.38-.06 1.08-.44 1.23-.86.15-.42.15-.78.11-.86-.05-.08-.17-.13-.35-.22z"
      />
    </svg>
  );

export default function Hero() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
        <div 
            aria-hidden="true" 
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-accent to-rose-400 dark:to-indigo-600"></div>
        </div>
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline">
          Aumente Sua Presença no Instagram{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Hoje Mesmo
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Obtenha seguidores brasileiros de alta qualidade, entregues em minutos e com segurança total.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" onClick={scrollToPackages}>
            Quero Crescer Agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
         <div className="mt-8 flex justify-center items-center gap-2 text-sm text-muted-foreground sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>+10.000 clientes satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Entrega rápida e segura</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Suporte 24h</span>
            </div>
          </div>

          <div className="mt-8 rounded-lg p-4 max-w-md mx-auto bg-green-500 text-white">
            <div className="flex justify-center items-center gap-3">
              <WhatsAppIcon />
              <div>
                <p className="text-left font-semibold">
                  Realize sua compra pelo site
                </p>
                <p className="text-left text-sm text-green-100">
                  Ou chame nosso atendente 24h/7!
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
