"use client";

import PackageCard from "../package-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { followerPackagesData } from "@/data/packages-data";

const packages = followerPackagesData.map(pkg => {
  if (pkg.followers === 5000) {
    return {
      ...pkg,
      originalPrice: 19.90,
      price: 12.90,
      isDiscount: true,
    }
  }

  const discountRate = pkg.followers >= 11250 ? 0.65 : 0.7; // 35% for >=11.25k, 30% for others

  return {
    ...pkg,
    originalPrice: pkg.price,
    price: pkg.price * discountRate,
    isDiscount: true,
  };
});


export default function Packages() {
  return (
    <section id="packages" className="py-16">
      <div className="container mx-auto px-0 pt-4">
        <div className="text-center px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            🎯 Escolha seu Pacote de Seguidores
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Planos para todos os perfis e orçamentos
          </p>
        </div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent className="-ml-4 py-4">
            {packages.map((pkg, index) => (
              <CarouselItem key={index} className="pl-4 basis-3/4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <PackageCard pkg={pkg} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
