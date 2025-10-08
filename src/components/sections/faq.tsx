import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "É seguro comprar seguidores para o Instagram?",
    answer:
      "Sim, é completamente seguro. Usamos métodos que estão em conformidade com as políticas do Instagram. Sua conta não estará em risco. Nunca pedimos sua senha.",
  },
  {
    question: "Quanto tempo leva para receber os seguidores?",
    answer:
      "A entrega de seguidores começa instantaneamente após a confirmação do seu pagamento. Para pacotes maiores, podemos distribuir os seguidores ao longo de um curto período para garantir um crescimento natural.",
  },
  {
    question: "Os seguidores serão pessoas reais?",
    answer:
      "Nós fornecemos perfis de alta qualidade para seguir sua conta. Embora sejam principalmente para prova social, eles parecem autênticos e não prejudicarão a reputação da sua conta.",
  },
  {
    question: "Os seguidores vão desaparecer?",
    answer:
      "Oferecemos uma garantia de retenção de 30 dias. Se algum dos seguidores que você comprou deixar de te seguir dentro deste período, nós os substituiremos gratuitamente.",
  },
  {
    question: "Quais métodos de pagamento vocês aceitam?",
    answer:
      "Aceitamos todos os principais cartões de crédito, PayPal e vários outros métodos de pagamento seguros. Nosso processo de checkout é totalmente criptografado para sua segurança.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            🤔 Perguntas Frequentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tem perguntas? Nós temos as respostas. Se você não encontrar o que procura, sinta-se à vontade para usar nosso chat de suporte.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
