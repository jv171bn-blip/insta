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
    name: "Jessica P.",
    handle: "@jessfit",
    text: "I was skeptical at first, but InstaBoost delivered! My engagement shot up, and it helped me land my first brand deal. So grateful!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-1"),
  },
  {
    name: "Mike R.",
    handle: "@mikerhots",
    text: "As a small business owner, getting noticed on Instagram is tough. This service gave me the initial boost I needed to look credible. Sales have increased since!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-2"),
  },
  {
    name: "Chloe T.",
    handle: "@travelchloe",
    text: "The followers were delivered super fast, and they look real. My profile looks so much more professional now. Highly recommend this for any aspiring influencer.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-3"),
  },
    {
    name: "David L.",
    handle: "@davidleephotos",
    text: "Simple, fast, and effective. It's the perfect way to kickstart your Instagram growth and gain that valuable social proof.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-4"),
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Loved by Creators & Businesses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say.
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
