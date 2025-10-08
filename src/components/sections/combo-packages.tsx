import PackageCard from "../package-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { packagesData as followerPackagesData } from "./packages";

const comboPackagesData = [
    { followers: 1000, likes: 500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 5000, likes: 2500, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isPopular: true, },
    { followers: 10000, likes: 5000, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isBestValue: true, },
    { followers: 20000, likes: 10000, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 30000, likes: 15000, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 50000, likes: 25000, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
];

const packages = comboPackagesData.map(pkg => {
  const followerPackage = followerPackagesData.find(fp => fp.followers === pkg.followers);
  const basePrice = followerPackage ? followerPackage.price : pkg.followers / 100; // Fallback price
  const comboPrice = basePrice * 1.35;
  const finalPrice = comboPrice * 0.7; // Applying 30% discount

  return {
    ...pkg,
    originalPrice: comboPrice,
    price: finalPrice,
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
        </Carousel>
      </div>
    </section>
  );
}
