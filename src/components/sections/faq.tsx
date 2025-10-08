import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is it safe to buy Instagram followers?",
    answer:
      "Yes, it is completely safe. We use methods that are compliant with Instagram's policies. Your account will not be at risk. We never ask for your password.",
  },
  {
    question: "How long does it take to receive the followers?",
    answer:
      "Follower delivery starts instantly after your payment is confirmed. For larger packages, we may drip-feed the followers over a short period to ensure natural growth.",
  },
  {
    question: "Will the followers be real people?",
    answer:
      "We provide high-quality profiles to follow your account. While they are primarily for social proof, they look authentic and will not harm your account's reputation.",
  },
  {
    question: "Will the followers disappear?",
    answer:
      "We provide a 30-day retention guarantee. If any of the followers you purchased unfollow you within this period, we will replace them free of charge.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other secure payment methods. Our checkout process is fully encrypted for your security.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions? We have answers. If you can't find what you're looking for, feel free to use our chat support.
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
