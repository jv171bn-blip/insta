"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-white"
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

export default function Hero() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
        <Rocket className="absolute -left-16 -top-16 h-72 w-72 text-primary/10 -z-10 animate-rocket-float" />
        <div 
            aria-hidden="true" 
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-accent to-rose-400 dark:to-indigo-600"></div>
        </div>
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline">
          Aumente Sua Presença no Instagram 🚀{" "}
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

          <Link href={siteConfig.whatsappLink} target="_blank" className="mt-8 rounded-lg p-4 max-w-md mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border border-green-700 block hover:scale-105 transition-transform">
            <div className="flex justify-center items-center gap-4">
              <div className="flex-shrink-0">
                <WhatsAppIcon />
              </div>
              <div className="text-left">
                <p className="font-bold">
                  Prefere comprar pelo WhatsApp?
                </p>
                <p className="text-sm text-green-100">
                  Nosso atendente está disponível 24h por dia!
                </p>
              </div>
            </div>
          </Link>
      </div>
    </section>
  );
}