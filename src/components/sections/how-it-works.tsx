import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Handshake, PackageSearch, Rocket, VenetianMask } from "lucide-react";

const steps = [
  {
    icon: <PackageSearch className="h-10 w-10 text-primary" />,
    title: "Escolha Seu Pacote",
    description:
      "Selecione o pacote de seguidores que melhor se adapta às suas metas de crescimento e orçamento.",
  },
  {
    icon: <VenetianMask className="h-10 w-10 text-primary" />,
    title: "Forneça Seu Usuário",
    description:
      "Digite seu nome de usuário do Instagram. Nunca pedimos sua senha.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: "Pagamento Seguro",
    description:
      "Conclua sua compra através do nosso gateway de pagamento 100% seguro.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Veja Seu Crescimento",
    description:
      "Os seguidores são entregues instantaneamente, impulsionando seu perfil em minutos!",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Obtenha Seguidores em 4 Passos Simples
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Nosso processo é projetado para ser rápido, simples e completamente seguro.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1">
          {steps.map((step, index) => (
            <Card key={index} className="text-center bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
