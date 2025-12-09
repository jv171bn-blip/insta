"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import Link from "next/link";
import WhatsAppIcon from "../whatsapp-icon";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const attendants = [
    { name: "Atendente 1", link: "/whats?attendant=1" },
    { name: "Atendente 2", link: "/whats?attendant=2" },
    { name: "Atendente 3", link: "/whats?attendant=3" },
  ];

  return (
    <section className="relative overflow-hidden">
      <Rocket className="absolute -left-16 -top-16 h-72 w-72 text-primary/10 -z-10 animate-rocket-float" />
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-accent to-rose-400 dark:to-indigo-600"></div>
      </div>
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline">
          Aumente Sua Presença no Instagram 🚀{" "}
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
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

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="mt-8 mx-auto max-w-sm w-full bg-green-500/10 border-green-500/30 text-green-500 hover:bg-green-500/20 hover:text-green-400"
            >
              <WhatsAppIcon className="h-5 w-5 mr-2 fill-green-500" />
              Está com problemas ou quer falar com um atendente? Clique aqui.
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Escolha um atendente</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 mt-4">
              {attendants.map((attendant) => (
                <Link
                  key={attendant.name}
                  href={attendant.link}
                  target="_blank"
                  className="w-full"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-4 text-lg p-6 bg-green-500/10 border-green-500/30 hover:bg-green-500/20"
                  >
                    <WhatsAppIcon className="h-6 w-6 text-green-500 fill-green-500" />
                    <span>{attendant.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
