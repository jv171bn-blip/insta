import PackageCard from "../package-card";

const packages = [
  {
    followers: 500,
    price: 8.99,
    features: [
      "Seguidores de Alta Qualidade",
      "Entrega Instantânea",
      "Suporte 24/7",
      "Não é Necessário Senha",
    ],
  },
  {
    followers: 1000,
    price: 14.99,
    isPopular: true,
    features: [
      "Seguidores de Alta Qualidade",
      "Entrega Instantânea",
      "Suporte 24/7",
      "Não é Necessário Senha",
      "Garantia de Recarga de 30 Dias",
    ],
  },
  {
    followers: 5000,
    price: 49.99,
    isBestValue: true,
    features: [
      "Seguidores de Alta Qualidade",
      "Entrega Instantânea",
      "Suporte 24/7",
      "Não é Necessário Senha",
      "Garantia de Recarga de 30 Dias",
      "Suporte Prioritário",
    ],
  },
  {
    followers: 10000,
    price: 89.99,
    features: [
      "Seguidores de Alta Qualidade",
      "Opção de Entrega Gradual",
      "Suporte 24/7",
      "Não é Necessário Senha",
      "Garantia de Recarga de 30 Dias",
      "Suporte Prioritário",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Escolha seu Impulso
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Oferecemos uma variedade de pacotes para atender às suas necessidades. Todos os planos vêm com nossa garantia de satisfação.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
