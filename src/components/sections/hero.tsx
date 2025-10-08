"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
        <div 
            aria-hidden="true" 
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-accent to-rose-400 dark:to-indigo-600"></div>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 text-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-headline">
          Boost Your Instagram{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Presence Instantly
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Get real, high-quality Instagram followers delivered in minutes.
          Elevate your social proof and unlock new growth opportunities today.
        </p>
        <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={scrollToPackages}>
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToPackages}>
            View Packages
          </Button>
        </div>
        <div className="mt-8 flex justify-center items-center gap-2">
          <div className="flex text-amber-400">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <p className="text-sm text-muted-foreground">
            Rated 4.9/5 by 10,000+ happy customers
          </p>
        </div>
      </div>
    </section>
  );
}
