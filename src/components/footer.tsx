import { Copyright } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              Boost your Instagram presence with our reliable and fast follower services.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()} InstaBoost. All rights reserved.</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>
            Disclaimer: InstaBoost is not affiliated with Instagram or Facebook.
            All brand names and logos are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
