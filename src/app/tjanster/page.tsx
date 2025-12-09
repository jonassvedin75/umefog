import Image from "next/image";
import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  Building2,
  Droplets,
  DoorOpen,
  Bath,
  Flame,
  Waves,
  type LucideIcon,
  Phone,
  Mail,
  User,
  Building
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "@/components/contact-form";

const serviceCards: { icon: LucideIcon; title: string; description: string; href: string; }[] = [
  { icon: Building2, title: "Fasadfogning", description: "Tätning och skydd av fasader i tegel, puts och betongelement.", href: "/tjanster/nyproduktion#fasadfogning" },
  { icon: Droplets, title: "Golvfogning", description: "Fogning av industrigolv där täthet krävs vid spolning och vätskeexponering.", href: "/tjanster/nyproduktion#golvfogning" },
  { icon: DoorOpen, title: "Dörr- och fönsterfogning", description: "Energieffektiv tätning runt dörrar och fönster i alla typer av fastigheter.", href: "/tjanster/nyproduktion#dorr-fonster" },
  { icon: Bath, title: "Kök- och badrumsfogning", description: "Fuktanpassad fogning i kök och våtutrymmen.", href: "/tjanster/nyproduktion#kok-badrum" },
  { icon: Flame, title: "Brandtätning", description: "Säker tätning av genomföringar i brandklassade konstruktioner.", href: "/tjanster/nyproduktion#brandtatning" },
  { icon: Waves, title: "Ljudtätning", description: "Dämpning av ljud för bättre arbetsmiljö och ökad sekretess.", href: "/tjanster/nyproduktion#ljudtatning" },
];


function ServicesSection() {
  return (
    <section id="tjanster" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold">Våra tjänster</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Vi utför uppdrag från Kiruna i norr till Sundsvall i söder. Med rätt material och lång erfarenhet skapar vi hållbara lösningar som skyddar fastigheter mot fukt, värmeläckage, brand och ljud.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl pt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0 h-auto text-base">
                  <Link href={service.href}>Läs mer</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="mt-16 text-center space-x-4">
            <Button size="lg" asChild>
                <Link href="/tjanster/nyproduktion">Nyproduktion</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/tjanster/renovering">Renovering</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
    return (
        <section id="kontakt" className="py-16 md:py-24 bg-secondary">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Kontakt</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Har du frågor eller vill du ha en offert? Fyll i formuläret så återkommer vi så snart som möjligt. Du kan också nå oss direkt via telefon.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full"><Phone className="w-6 h-6 text-primary"/></div>
                            <div>
                                <h3 className="font-semibold text-lg">Johan Bergman</h3>
                                <a href="tel:0761355152" className="text-muted-foreground hover:text-primary transition-colors">076-135 51 52</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline">Skicka ett meddelande</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default function TjansterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1 pt-16">
        <ServicesSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}

    