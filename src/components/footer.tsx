import { Copyright } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-between items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              Aumente sua presença no Instagram.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()} InstaBoost. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
