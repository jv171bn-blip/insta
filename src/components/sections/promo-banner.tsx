
"use client";

import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative w-full aspect-[2.8/1] rounded-lg overflow-hidden">
          <Image
            src="https://i.imgur.com/n14a79n.png"
            alt="Promoção Imperdível - Todos os pacotes com 50% de desconto"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
