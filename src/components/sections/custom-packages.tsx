"use client";

import { Button } from "../ui/button";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

export default function CustomPackages() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-green-500 p-6 text-white shadow-lg text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
                <WhatsAppIcon />
                <h3 className="text-3xl font-extrabold">Pacotes Personalizados? 🤔</h3>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-green-100">
                Caso queira pacotes personalizados, favor entrar em contato via Whatsapp que um dos nossos atendentes irá falar com você.
            </p>
            <Button 
                size="lg"
                className="mt-6 bg-white text-green-600 hover:bg-white/90 font-bold"
                onClick={() => window.open('https://wa.me/', '_blank')}
            >
                Falar com Atendente
            </Button>
        </div>
      </div>
    </section>
  );
}
