"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import WhatsAppIcon from "../whatsapp-icon";

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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Link key={i} href={siteConfig.whatsappLink} target="_blank" className="rounded-lg p-4 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border border-green-700 block hover:scale-105 transition-transform">
                <div className="flex flex-col justify-center items-center text-center gap-2">
                  <WhatsAppIcon className="h-8 w-8 text-white fill-white" />
                  <div>
                    <p className="font-bold">
                      Compre via WhatsApp
                    </p>
                    <p className="text-sm text-green-100">
                      Atendente disponível 24h!
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
}
