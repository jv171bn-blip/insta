import { Button } from "./ui/button";
import Logo from "./logo";
import { PackageSearch } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <Button variant="outline">
          <PackageSearch className="mr-2 h-4 w-4" />
          Rastrear Pedido
        </Button>
      </div>
    </header>
  );
}
