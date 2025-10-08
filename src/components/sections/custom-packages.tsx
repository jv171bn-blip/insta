"use client";

import { Button } from "../ui/button";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M19.05 4.94A10 10 0 0 0 12 2a10 10 0 0 0-9.94 11.05c0 1.77.46 3.45 1.32 4.95L2 22l5.05-1.32c1.5.86 3.18 1.32 4.95 1.32h.01a10 10 0 0 0 7.04-2.94 10 10 0 0 0 2.94-7.04 10 10 0 0 0-2.95-7.07zM12 20.01h-.01c-1.55 0-3.04-.42-4.34-1.18l-.31-.18-3.23.85.87-3.15-.2-.33a8.01 8.01 0 0 1-1.26-4.17 8.01 8.01 0 0 1 8.01-8.01 8.01 8.01 0 0 1 8.01 8.01 8.01 8.01 0 0 1-8.01 8.01zM16.53 13.96c-.18-.09-1.08-.53-1.25-.59-.17-.06-.29-.09-.42.09-.12.18-.47.59-.58.71-.11.12-.22.13-.41.04-.19-.09-1.08-.4-2.06-1.28-.76-.69-1.28-1.54-1.43-1.8-.15-.26-.01-.4.08-.53.08-.12.18-.29.27-.42.09-.12.12-.2.18-.34.06-.14.03-.26 0-.35s-.42-.51-.58-.7c-.15-.19-.31-.16-.42-.16-.1 0-.22 0-.34.01-.12.01-.3.04-.46.22-.16.18-.61.6-.61 1.47s.63 1.71.71 1.83c.09.12 1.23 1.88 3 2.6.43.18.76.29.98.37.5.18.94.15 1.28.09.38-.06 1.08-.44 1.23-.86.15-.42.15-.78.11-.86-.05-.08-.17-.13-.35-.22z"
      />
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
