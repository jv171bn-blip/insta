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
  Rocket,
  Sparkles,
  User,
  CheckCircle,
  Plus,
  Heart,
  Users,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { type Package } from "@/data/packages-data";
import { Alert, AlertDescription } from "./ui/alert";


type Props = {
  pkg: Package;
  onStartCheckout: (url: string) => void;
};

type Step = "username" | "confirm" | "complete";

export default function PackageCard({ pkg, onStartCheckout }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("username");
  const [username, setUsername] = useState("");
  const [formattedFollowers, setFormattedFollowers] = useState<string | number>(pkg.followers);
  const [formattedLikes, setFormattedLikes] = useState<string | number | undefined>(pkg.likes);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    // Client-side only effect to format numbers and prevent hydration mismatch
    setFormattedFollowers(pkg.followers.toLocaleString('pt-BR'));
    if (pkg.likes) {
      setFormattedLikes(pkg.likes.toLocaleString('pt-BR'));
    }
  }, [pkg.followers, pkg.likes]);
  
  useEffect(() => {
    if (!isOpen) {
      // Reset state on close
      setTimeout(() => {
        setStep("username");
        setUsername("");
      }, 300);
    }
  }, [isOpen]);

  const handleContinue = () => {
    if (username.trim() !== "") {
      setStep("confirm");
    }
  };

  const handleConfirmAndPay = () => {
    if (pkg.checkoutLink) {
        onStartCheckout(pkg.checkoutLink);
        setIsOpen(false);
    }
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
              Forneça o seu usuário ou link do perfil. Não é necessário senha.
            </p>
            <div className="relative mt-2">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="@usuario ou link do perfil"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-9"
              />
            </div>
            <Alert variant="destructive" className="mt-4 bg-amber-500/10 border-amber-500/30 text-amber-500">
              <AlertTriangle className="h-4 w-4 !text-amber-500" />
              <AlertDescription className="text-amber-500">
                Sua conta precisa estar em modo público para receber os seguidores.
              </AlertDescription>
            </Alert>
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
                  {pkg.followers.toLocaleString('pt-BR')} Seguidores
                  {pkg.likes && ` + ${pkg.likes.toLocaleString('pt-BR')} Curtidas`}
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Para o perfil</p>
                <p className="text-2xl font-bold text-primary break-all">{username}</p>
              </div>
              <div className="text-center text-4xl font-bold text-accent">
                R${pkg.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <Button
              onClick={handleConfirmAndPay}
              className="w-full mt-4 bg-accent hover:bg-accent/90"
            >
              Confirmar e Pagar
            </Button>
          </>
        );
      case "complete":
        return (
          <div className="flex flex-col items-center justify-center h-48 gap-4 text-center">
            <Sparkles className="h-12 w-12 text-amber-400" />
            <p className="font-semibold text-lg">Entrega Concluída!</p>
            <p className="text-sm text-muted-foreground">
              Aproveite seu novo público! Pode levar algumas horas para que todos os seguidores e curtidas apareçam.
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
          "flex flex-col transform hover:-translate-y-2 transition-transform duration-300 relative hover:z-20",
          (pkg.isPopular || pkg.isBestValue) && "border-primary border-2 shadow-primary/20 shadow-lg"
        )}
      >
        {pkg.isPopular ? (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
            Mais Popular
          </Badge>
        ) : pkg.isBestValue ? (
          <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white">
            Melhor Custo-Benefício
          </Badge>
        ) : pkg.isDiscount ? (
          <Badge variant="destructive" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white border-green-600">
            50% OFF
          </Badge>
        ) : null}
        <CardHeader className="items-center text-center pt-8">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <CardTitle className="text-3xl font-extrabold text-primary">
                  {formattedFollowers}
                </CardTitle>
                <CardDescription className="text-md font-medium flex items-center justify-center gap-1">
                  <Users className="h-4 w-4"/> Seguidores
                </CardDescription>
              </div>
              {formattedLikes && (
                <>
                    <Plus className="h-8 w-8 text-muted-foreground" />
                    <div className="text-center">
                        <CardTitle className="text-3xl font-extrabold text-primary">
                        {formattedLikes}
                        </CardTitle>
                        <CardDescription className="text-md font-medium flex items-center justify-center gap-1">
                        <Heart className="h-4 w-4"/> Curtidas
                        </CardDescription>
                    </div>
                </>
              )}
            </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="text-center mb-6">
          <div className="flex justify-center items-baseline gap-2">
            {pkg.originalPrice && (
                <span className="text-2xl font-medium text-muted-foreground line-through">
                    R${pkg.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
            )}
            <span className="text-4xl font-bold">R${pkg.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
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
            onClick={handleOpenDialog}
            className="w-full"
            variant={(pkg.isPopular || pkg.isBestValue) ? "default" : "outline"}
          >
            Comprar Agora
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          {renderDialogContent()}
        </DialogContent>
      </Dialog>
    </>
  );
}
