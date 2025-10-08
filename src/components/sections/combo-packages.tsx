"use client";

import PackageCard from "../package-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { packagesData as followerPackagesData } from "./packages";

const comboPackagesData = [
    { followers: 2250, likes: 750, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 5000, likes: 1650, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 11250, likes: 3750, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isPopular: true, },
    { followers: 22500, likes: 7500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isBestValue: true, },
    { followers: 45000, likes: 15000, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 67500, likes: 22500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 112500, likes: 37500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
];

const packages = comboPackagesData.map(pkg => {
    const followerPackage = followerPackagesData.find(fp => fp.followers === pkg.followers);
    
    if (!followerPackage) {
        // Fallback or error handling if no matching follower package is found
        return {
            ...pkg,
            price: 0,
            originalPrice: 0,
        };
    }
    
    const basePrice = followerPackage.price;
    const finalPrice = basePrice * 1.15; // Add 15% for likes
  
    return {
      ...pkg,
      price: Math.round(finalPrice),
      originalPrice: undefined, // No "from" price for combos anymore
      isDiscount: false, // No 30% discount badge
    }
  });


export default function ComboPackages() {
  return (
    <section id="combo-packages" className="py-16 bg-muted/50">
      <div className="container mx-auto px-0 pt-4">
        <div className="text-center px-4">
          <h2 className="text-3xl font-extrabold tracking-tight whitespace-nowrap">
            <span>✨</span> PROMOÇÕES DO MÊS <span>✨</span>
          </h2>
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
              <CarouselItem key={index} className="pl-4 basis-3/4">
                <div className="p-1">
                  <PackageCard pkg={pkg} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
