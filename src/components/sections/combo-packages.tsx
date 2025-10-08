import PackageCard from "../package-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const packagesData = [
    { followers: 1000, likes: 500, price: 14.99, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 5000, likes: 2500, price: 29.99, isPopular: true, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 10000, likes: 5000, price: 49.99, isBestValue: true, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"] },
    { followers: 20000, likes: 10000, price: 79.99, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 30000, likes: 15000, price: 99.99, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
    { followers: 50000, likes: 25000, price: 149.99, features: ["Seguidores e Curtidas 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], isDiscount: true },
];

const packages = packagesData.map(pkg => ({
  ...pkg,
  originalPrice: pkg.price,
  price: pkg.price * 0.7,
}));


export default function ComboPackages() {
  return (
    <section id="combo-packages" className="py-16 bg-muted/50">
      <div className="container mx-auto px-0 pt-4">
        <div className="text-center px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Nossos Combos: Seguidores + Curtidas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Acelere seu crescimento com nossos pacotes combinados e economize!
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
        </Carousel>
      </div>
    </section>
  );
}
