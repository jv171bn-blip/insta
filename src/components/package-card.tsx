"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  ChevronRight,
  Loader2,
  Rocket,
  Sparkles,
  User,
  CheckCircle,
} from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

type Package = {
  followers: number;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
  isBestValue?: boolean;
  features: string[];
};

type Props = {
  pkg: Package;
};

type Step = "username" | "confirm" | "processing" | "delivering" | "complete";

export default function PackageCard({ pkg }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("username");
  const [username, setUsername] = useState("");
  const [progress, setProgress] = useState(0);
  const [formattedFollowers, setFormattedFollowers] = useState<string | number>(pkg.followers);

  useEffect(() => {
    // Client-side only effect to format numbers and prevent hydration mismatch
    setFormattedFollowers(pkg.followers.toLocaleString());
  }, [pkg.followers]);

  useEffect(() => {
    if (step === "delivering") {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setStep("complete"), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [step]);
  
  useEffect(() => {
    if (!isOpen) {
      // Reset state on close
      setTimeout(() => {
        setStep("username");
        setUsername("");
        setProgress(0);
      }, 300);
    }
  }, [isOpen]);

  const handleContinue = () => {
    if (username.trim() !== "") {
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    setStep("processing");
    setTimeout(() => {
      setStep("delivering");
    }, 2000);
  };

  const renderDialogContent = () => {
    switch (step) {
      case "username":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Vamos começar!</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Por favor, insira seu nome de usuário do Instagram. Não é necessário senha.
            </p>
            <div className="relative mt-2">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="@usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button
              onClick={handleContinue}
              disabled={!username}
              className="w-full mt-4"
            >
              Continuar <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        );
      case "confirm":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Confirme seu Pedido</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Você está comprando</p>
                <p className="text-2xl font-bold">
                  {pkg.followers.toLocaleString()} Seguidores
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Para o usuário do Instagram</p>
                <p className="text-2xl font-bold text-primary">{username}</p>
              </div>
              <div className="text-center text-4xl font-bold text-accent">
                R${pkg.price.toFixed(2).replace('.', ',')}
              </div>
            </div>
            <Button onClick={handleConfirm} className="w-full mt-4 bg-accent hover:bg-accent/90">
              Confirmar e Pagar
            </Button>
          </>
        );
      case "processing":
        return (
          <div className="flex flex-col items-center justify-center h-48 gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="font-semibold text-lg">Processando seu pagamento...</p>
            <p className="text-sm text-muted-foreground">Por favor, aguarde um momento.</p>
          </div>
        );
      case "delivering":
        return (
          <div className="flex flex-col items-center justify-center h-48 gap-4">
            <Rocket className="h-12 w-12 text-primary" />
            <p className="font-semibold text-lg">Entregando Seguidores!</p>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground">{progress}% completo</p>
          </div>
        );
      case "complete":
        return (
          <div className="flex flex-col items-center justify-center h-48 gap-4 text-center">
            <Sparkles className="h-12 w-12 text-amber-400" />
            <p className="font-semibold text-lg">Entrega Concluída!</p>
            <p className="text-sm text-muted-foreground">
              Aproveite seus novos seguidores! Pode levar algumas horas para que todos os seguidores apareçam.
            </p>
            <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
              Concluído
            </Button>
          </div>
        );
    }
  };

  return (
    <>
      <Card
        className={cn(
          "flex flex-col transform hover:-translate-y-2 transition-transform duration-300 relative hover:z-10",
          pkg.isPopular && "border-primary border-2 shadow-primary/20 shadow-lg"
        )}
      >
        {pkg.isPopular && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
            Mais Popular
          </Badge>
        )}
         {pkg.isBestValue && (
          <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white">
            Melhor Valor
          </Badge>
        )}
        <CardHeader className="items-center text-center pt-8">
          <CardTitle className="text-5xl font-extrabold text-primary">
            {formattedFollowers}
          </CardTitle>
          <CardDescription className="text-lg font-medium">
            Seguidores
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="text-center mb-6">
          <div className="flex justify-center items-baseline gap-2">
            {pkg.originalPrice && (
                <span className="text-2xl font-medium text-muted-foreground line-through">
                    R${pkg.originalPrice.toFixed(2).replace('.', ',')}
                </span>
            )}
            <span className="text-4xl font-bold">R${pkg.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <span className="text-muted-foreground">/pagamento único</span>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-full"
            variant={pkg.isPopular ? "default" : "outline"}
          >
            Comprar Agora
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>{renderDialogContent()}</DialogContent>
      </Dialog>
    </>
  );
}
