"use client";

import { useEffect, useState } from "react";
import { Smile, PackageCheck, Users } from "lucide-react";

const Counter = ({ initialValue, icon, label }: { initialValue: number, icon: React.ReactNode, label: string }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.random() * 3000 + 2000); // Update every 2-5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="text-primary">{icon}</div>
      <p className="text-3xl md:text-4xl font-bold">{count.toLocaleString()}+</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default function SocialProof() {
  return (
    <div className="pb-16 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg shadow-lg p-8 border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Counter initialValue={10452} icon={<Users className="h-10 w-10" />} label="Happy Customers" />
            <Counter initialValue={25890} icon={<PackageCheck className="h-10 w-10" />} label="Orders Delivered" />
            <Counter initialValue={4.9} icon={<Smile className="h-10 w-10" />} label="Star Rating" />
          </div>
        </div>
      </div>
    </div>
  );
}
