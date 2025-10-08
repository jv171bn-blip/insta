import PackageCard from "../package-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const packagesData = [
    { followers: 1000, price: 9.99, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 5000, price: 19.99, isPopular: true, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 10000, price: 29.99, isBestValue: true, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 20000, price: 39.99, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 30000, price: 59.99, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 50000, price: 79.99, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
];

const packages = packagesData.map(pkg => ({
  ...pkg,
  originalPrice: pkg.price,
  price: pkg.price * 0.7,
}));


export default function Packages() {
  return (
    <section id="packages" className="py-16">
      <div className="container mx-auto px-0">
        <div className="text-center px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Escolha seu Pacote
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
          <CarouselContent className="-ml-4">
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
