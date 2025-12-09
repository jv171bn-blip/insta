"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import Link from "next/link";
import WhatsAppIcon from "../whatsapp-icon";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

export default function Hero() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/hero-background.jpg"
        alt="Cidade à noite vista da água, com prédios iluminados"
        fill
        className="object-cover -z-20 opacity-20"
        data-ai-hint="cidade noite"
      />
      
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20 -z-10"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-accent to-rose-400 dark:to-indigo-600"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline">
          Aumente Sua Presença no Instagram 🚀{" "}
          <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            Insta Sheik
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Obtenha seguidores brasileiros de alta qualidade, entregues em minutos e
          com segurança total.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
            onClick={scrollToPackages}
          >
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

        <Link
          href={siteConfig.whatsappLink}
          target="_blank"
          className="mt-8 rounded-lg p-4 max-w-md mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border border-green-700 block hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center gap-4">
            <WhatsAppIcon className="h-8 w-8 text-white fill-white" />
            <div className="text-left">
              <p className="font-bold text-lg">Prefere comprar pelo WhatsApp?</p>
              <p className="text-sm">Nosso atendente está disponível 24h por dia!</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
