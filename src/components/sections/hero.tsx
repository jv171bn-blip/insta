"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            Instantaneamente
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Obtenha seguidores de alta qualidade, entregues em minutos.
        </p>
        <div className="mt-8 flex flex-col justify-center items-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full" onClick={scrollToPackages}>
            Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToPackages} className="w-full">
            Ver Pacotes
          </Button>
        </div>
      </div>
    </section>
  );
}
