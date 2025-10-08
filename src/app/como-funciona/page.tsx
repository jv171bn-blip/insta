import Footer from "@/components/footer";
import Header from "@/components/header";
import HowItWorks from "@/components/sections/how-it-works";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ComoFuncionaPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <HowItWorks />
                <div className="text-center pb-16">
                    <Button asChild variant="outline">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar para o Início
                        </Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
