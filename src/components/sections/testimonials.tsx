"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jéssica P.",
    handle: "@jessfit",
    text: "Tava meio assim no começo, mas o InstaSheik entregou DEMAIS! Meu engajamento subiu mto e fechei minha 1ª publi. Mto grata!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-1"),
  },
  {
    name: "Mike R.",
    handle: "@mikerhots",
    text: "Tenho uma lojinha e é difícil aparecer no Insta. Esse serviço deu o up que eu precisava pra passar mais credibilidade. As vendas melhoraram dps disso!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-2"),
  },
  {
    name: "Chloe T.",
    handle: "@travelchloe",
    text: "Os seguidores chegaram rapidinho e os perfis são bons. Meu perfil tá com outra cara, bem mais profissa. Recomendo pra qqr um que queira ser influencer.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-3"),
  },
  {
    name: "David L.",
    handle: "@davidleephotos",
    text: "Simples, rápido e funciona. É o jeito perfeito de acelerar seu crescimento no Insta e ganhar aquela prova social que faz a diferença.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-4"),
  },
  {
    name: "Ana F.",
    handle: "@anacooks",
    text: "O serviço foi melhor que eu esperava. A entrega foi quase na hora e a qualidade dos perfis é top. Meu alcance orgânico até melhorou dps que comprei!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-5"),
  },
  {
    name: "Bruno M.",
    handle: "@bmdesign",
    text: "Suporte excelente e um serviço que cumpre o que promete. Consegui a prova social que faltava pro meu portfólio de design. Ctz que vou usar de novo.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-6"),
  },
  {
    name: "Lucas G.",
    handle: "@lucasgamer",
    text: "No meu nicho que é super concorrido (games), cada seguidor conta. O InstaSheik me ajudou a ter uma base sólida pra começar. Recomendo 100%!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-7"),
  },
  {
    name: "Mariana S.",
    handle: "@maristyle",
    text: "Fantástico! O up no número de seguidores me deu a credibilidade pra fechar umas parcerias com marcas de moda. O serviço é seguro e mto eficiente.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-8"),
  },
  {
    name: "Rafa V.",
    handle: "@rafavibes",
    text: "Funciona mesmo! Tava precisando de um empurrãozinho e foi a melhor coisa que fiz. A entrega foi super rápida. Vlw, galera!",
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-9'),
  },
  {
    name: 'Leo C.',
    handle: '@leocode',
    text: 'Como dev, preciso mostrar autoridade. Comprei o pacote e meu perfil ficou com uma aparência bem mais forte. Ajudou a atrair clientes de freela.',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-10'),
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            📣 Amado por Criadores e Empresas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes têm a dizer.
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-3/4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start gap-4 p-6 h-full">
                      <div className="flex text-amber-400">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                      </div>
                      <p className="text-muted-foreground flex-1">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3 pt-4 border-t w-full">
                        {testimonial.image && (
                          <Avatar>
                            <AvatarImage
                              src={testimonial.image.imageUrl}
                              alt={testimonial.name}
                              data-ai-hint={testimonial.image.imageHint}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
