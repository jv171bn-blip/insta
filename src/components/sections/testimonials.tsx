"use client";

import Image from "next/image";
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
    text: "Eu estava cética no início, mas o InstaImpulso entregou! Meu engajamento disparou e me ajudou a conseguir meu primeiro contrato com uma marca. Muito grata!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-1"),
  },
  {
    name: "Mike R.",
    handle: "@mikerhots",
    text: "Como dono de uma pequena empresa, ser notado no Instagram é difícil. Este serviço me deu o impulso inicial que eu precisava para parecer crível. As vendas aumentaram desde então!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-2"),
  },
  {
    name: "Chloe T.",
    handle: "@travelchloe",
    text: "Os seguidores foram entregues super rápido e parecem reais. Meu perfil parece muito mais profissional agora. Recomendo muito para qualquer aspirante a influenciador.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-3"),
  },
    {
    name: "David L.",
    handle: "@davidleephotos",
    text: "Simples, rápido e eficaz. É a maneira perfeita de impulsionar seu crescimento no Instagram e ganhar aquela valiosa prova social.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-4"),
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Amado por Criadores e Empresas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes têm a dizer.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start gap-4 p-6">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
