"use client";

import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

export default function Cta() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <Sparkles className="mx-auto h-12 w-12 text-amber-300" />
        <h2 className="text-3xl font-extrabold mt-4">
          Pronto para Viralizar?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Não espere para aumentar seu público. Junte-se a milhares de criadores, influenciadores e empresas que impulsionaram seu Instagram com o InstaImpulso.
        </p>
        <Button
          onClick={scrollToPackages}
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Comprar Seguidores Agora
        </Button>
      </div>
    </section>
  );
}
