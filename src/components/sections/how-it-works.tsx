import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Handshake, PackageSearch, Rocket, VenetianMask } from "lucide-react";

const steps = [
  {
    icon: <PackageSearch className="h-10 w-10 text-primary" />,
    title: "Choose Your Package",
    description:
      "Select the follower package that best fits your growth goals and budget.",
  },
  {
    icon: <VenetianMask className="h-10 w-10 text-primary" />,
    title: "Provide Your Username",
    description:
      "Enter your Instagram username. We never ask for your password.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: "Secure Payment",
    description:
      "Complete your purchase through our 100% secure payment gateway.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Watch Your Growth",
    description:
      "Followers are delivered instantly, boosting your profile in minutes!",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Get Followers in 4 Simple Steps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our process is designed to be fast, simple, and completely secure.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="text-center bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
