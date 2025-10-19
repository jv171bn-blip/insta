
"use client";

import { Sparkles, Tag } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground shadow-lg text-center relative overflow-hidden">
          <Sparkles className="absolute -top-4 -left-4 h-24 w-24 text-white/20 opacity-50 transform-gpu rotate-45" />
          <Sparkles className="absolute -bottom-8 -right-8 h-28 w-28 text-white/20 opacity-50 transform-gpu" />
           <div className="relative z-10">
            <div className="flex justify-center items-center gap-2 mb-2">
                <Tag className="h-6 w-6" />
                <h2 className="text-xl font-bold uppercase tracking-wider">
                Promoção Imperdível
                </h2>
            </div>
            <p className="text-3xl md:text-4xl font-extrabold mt-2">
                TODOS OS PACOTES COM 50% DE DESCONTO
            </p>
            <p className="mt-2 text-lg font-semibold text-primary-foreground/80">
                POR TEMPO LIMITADO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
