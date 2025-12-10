
"use client";

import PackageCard from "../package-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { followerPackagesData, type Package } from "@/data/packages-data";

const comboPackagesData: Omit<Package, 'price' | 'originalPrice' | 'isDiscount' | 'isBestValue'>[] = [
    { followers: 5000, likes: 1650, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instasheik.shop/VCCL1O8SCCO5" },
    { followers: 11250, likes: 3750, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isPopular: true, checkoutLink: "https://checkout.instasheik.shop/VCCL1O8SCCO6" },
    { followers: 22500, likes: 7500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isBestValue: false, checkoutLink: "https://checkout.instasheik.shop/VCCL1O8SCCO7" },
    { followers: 45000, likes: 15000, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instasheik.shop/VCCL1O8SCCO8" },
    { followers: 67500, likes: 22500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instasheik.store/VCCL1O8SCCO9" },
    { followers: 112500, likes: 37500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instasheik.store/VCCL1O8SCCOA" },
];

const packages = comboPackagesData.map(pkg => {
    const followerPackage = followerPackagesData.find(fp => fp.followers === pkg.followers);
    
    if (pkg.followers === 5000) {
      const finalPrice = 11.90;
      const originalPrice = 23.80;
       return {
        ...pkg,
        price: finalPrice,
        originalPrice: originalPrice,
        isBestValue: true,
      }
    }

    if (pkg.followers === 11250) {
      const finalPrice = 15.90; 
      const originalPrice = 31.80;
       return {
        ...pkg,
        price: finalPrice,
        originalPrice: originalPrice,
        isDiscount: true,
      }
    }

    if (pkg.followers === 22500) {
      const finalPrice = 34.90;
      const originalPrice = 69.80;
      return {
        ...pkg,
        price: finalPrice,
        originalPrice: originalPrice,
        isDiscount: true,
      }
    }

    if (pkg.followers === 45000) {
      const finalPrice = 55.50; 
      const originalPrice = 111.00; 
       return {
        ...pkg,
        price: finalPrice,
        originalPrice: originalPrice,
        isDiscount: true,
      }
    }

    if (pkg.followers === 67500) {
      const finalPrice = 74.90;
      const originalPrice = 149.80;
       return {
        ...pkg,
        price: finalPrice,
        originalPrice: originalPrice,
        isDiscount: true,
      }
    }

    if (pkg.followers === 112500) {
      const finalPrice = 114.90;
      const originalPrice = 229.80;
       return {
        ...pkg,
        price: finalPrice,
        originalPrice: originalPrice,
        isDiscount: true,
      }
    }
    
    if (!followerPackage) {
        return { ...pkg, price: 0, originalPrice: 0 };
    }
    
    const basePrice = followerPackage.price;
    const comboPrice = basePrice * 1.15; // Add 15% for likes
    const finalPrice = comboPrice * 0.5; // Apply 50% discount
  
    return {
      ...pkg,
      price: finalPrice,
      originalPrice: comboPrice,
      isDiscount: true,
    }
});


export default function ComboPackages({ onStartCheckout }: { onStartCheckout: (url: string) => void }) {
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
              <CarouselItem key={index} className="pl-4 basis-3/4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <PackageCard pkg={pkg} onStartCheckout={onStartCheckout} />
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
