import PackageCard from "../package-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const packagesData = [
    { followers: 2250, price: 9.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 11250, price: 49.90, isPopular: true, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 22500, price: 89.90, isBestValue: true, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 45000, price: 129.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 67500, price: 199.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 112500, price: 299.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
];

const packages = packagesData.map(pkg => ({
  ...pkg,
  originalPrice: pkg.price,
  price: pkg.price * 0.7,
}));


export default function Packages() {
  return (
    <section id="packages" className="py-16">
      <div className="container mx-auto px-0 pt-4">
        <div className="text-center px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            🎯 Escolha seu Pacote de Seguidores
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Desconto de 30% para novos clientes do InstaTurbo
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
