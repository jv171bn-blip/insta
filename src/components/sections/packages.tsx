import PackageCard from "../package-card";

const packages = [
  { followers: 1000, price: 9.99 },
  { followers: 2000, price: 12.99 },
  { followers: 3000, price: 13.99 },
  { followers: 4000, price: 15.99 },
  { followers: 5000, price: 19.99, isPopular: true },
  { followers: 7000, price: 24.99 },
  { followers: 10000, price: 29.99, isBestValue: true },
  { followers: 15000, price: 34.99 },
  { followers: 20000, price: 39.99 },
  { followers: 30000, price: 59.99 },
  { followers: 50000, price: 79.99 },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Escolha seu Impulso
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Oferecemos uma variedade de pacotes para atender às suas necessidades.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
