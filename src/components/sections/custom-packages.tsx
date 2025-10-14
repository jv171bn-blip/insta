"use client";

import { siteConfig } from "@/lib/config";
import { Button } from "../ui/button";
import WhatsAppIcon from "../whatsapp-icon";

export default function CustomPackages() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-primary p-6 text-primary-foreground shadow-lg text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
                <WhatsAppIcon className="h-10 w-10" />
                <h3 className="text-3xl font-extrabold">Pacotes Personalizados? 🤔</h3>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80">
                Caso queira pacotes personalizados, favor entrar em contato via Whatsapp que um dos nossos atendentes irá falar com você.
            </p>
            <Button 
                size="lg"
                className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold"
                onClick={() => window.open(siteConfig.whatsappLink, '_blank')}
            >
                Falar com Atendente
            </Button>
        </div>
      </div>
    </section>
  );
}
