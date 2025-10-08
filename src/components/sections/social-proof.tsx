"use client";

import { useEffect, useState } from "react";
import { Smile, PackageCheck, Users } from "lucide-react";

const Counter = ({ initialValue, icon, label, isRating }: { initialValue: number, icon: React.ReactNode, label: string, isRating?: boolean }) => {
  const [count, setCount] = useState(initialValue);
  const [formattedCount, setFormattedCount] = useState<string | number>(initialValue);

  useEffect(() => {
    // Client-side only effect to format numbers and prevent hydration mismatch
    if(isRating) {
      setFormattedCount(count.toFixed(1));
    } else {
      setFormattedCount(count.toLocaleString());
    }
  }, [count, isRating]);

  useEffect(() => {
    if (isRating) return; // Don't animate rating

    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.random() * 3000 + 2000); // Update every 2-5 seconds

    return () => clearInterval(interval);
  }, [isRating]);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="text-primary">{icon}</div>
      <p className="text-3xl font-bold">{formattedCount}+</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default function SocialProof() {
  return (
    <div className="pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-lg shadow-lg p-8 border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Counter initialValue={10452} icon={<Users className="h-10 w-10" />} label="Clientes Satisfeitos" />
            <Counter initialValue={25890} icon={<PackageCheck className="h-10 w-10" />} label="Pedidos Entregues" />
            <Counter initialValue={4.9} icon={<Smile className="h-10 w-10" />} label="Avaliação Média" isRating />
          </div>
        </div>
      </div>
    </div>
  );
}
