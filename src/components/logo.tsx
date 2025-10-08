import { cn } from "@/lib/utils";
import Link from "next/link";

const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-primary"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 text-lg font-bold", className)}
    >
      <InstagramIcon />
      <span className="font-headline">InstaImpulso</span>
    </Link>
  );
}
