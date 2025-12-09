import Image from "next/image";
import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const faqItems = [
  {
    question: "Hur beställer jag arbetet hos Umefog?",
    answer: "Fastighetsägare, byggentreprenörer eller industrier som har behov av fogning och tätning i nyproducerade eller befintliga fastigheter skickar in underlag till Umefog. Därefter väljer de upplägg beroende på behov och projektets omfattning. De kan välja ett fast pris där vi beräknar kostnader för material, arbete och övriga moment, eller ett löpande pris där kunden får ta del av en tydlig prislista som specificerar kostnader för material, arbetstid och tillkommande insatser."
  },
  {
    question: "Hur säkerställer Umefog rätt lösning för varje fastighet?",
    answer: "Alla fastigheter har sina unika förutsättningar och vissa uppdrag kräver extra hänsyn. Därför är noggrann kommunikation och lång erfarenhet avgörande. I äldre fastigheter och kulturmärkta fastigheter krävs ofta specialanpassade metoder och material för att både bevara fastighetens karaktär och uppfylla tekniska krav."
  },
  {
    question: "Hur länge håller fogarna?",
    answer: "Fogarnas livslängd varierar men som tumregel bör de inspekteras okulärt ungefär vart femte år. Hur länge fogarna håller påverkas både av vilken verksamhet som pågår i fastigheten, till exempel slitage och fukt i invändiga miljöer samt var i landet fastigheten ligger, där temperaturväxlingar och väderpåverkan spelar stor roll för utvändiga fogar. Redan vid en enkel genomgång går det att upptäcka tecken på slitage som sprickor, missfärgning, att fogen lossnat från underlaget eller blivit vit och porös."
  },
  {
    question: "Vad händer om fogarna inte renoveras i tid?",
    answer: "Om slitna fogar inte åtgärdas i tid ökar risken för att regnvatten tränger in i konstruktionen vilket kan leda till fuktskador i fasaden och i förlängningen kostsamma renoveringar. Regelbunden kontroll och underhåll är därför en viktig del i att bevara fastighetens skick och funktion över tid."
  },
  {
    question: "Vilka produkter använder Umefog?",
    answer: "Umefog arbetar med noggrant utvalda produkter från Sika, Soudal, HABE och Byggtema, leverantörer som är kända för hög kvalitet, lång hållbarhet och lösningar anpassade för professionell fogning och tätning i både bygg- och industrimiljöer. Sika är en global ledande aktör inom limning, tätning och skydd av fastigheter och konstruktioner. Soudal är Europas största oberoende tillverkare av fogmassor och lim med stor erfarenhet inom kemiska byggspecialiteter. Tillsammans ger dessa leverantörer Umefog möjlighet att erbjuda säkra, hållbara och skräddarsydda lösningar för varje fastighet."
  }
];

const byggforetag = ["OF Bygg AB", "Contractor Bygg I Umeå AB", "Prefabmästarna Sverige AB", "Hedin Construction Byggservice AB", "Rekab Entreprenad AB", "Northpower Stålhallar AB", "Skanska Sverige AB"];
const sagverk = ["Setra Trävaror AB", "Norra Timber AB"];

function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  return (
    <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center text-center text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Specialister på tätning och fogning
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
           Umefog är specialister på tätning och fogning i både nyproduktion och befintliga fastigheter som flerbostadshus, kommersiella fastigheter och industrimiljöer, med särskild kompetens inom sågverksmiljöer.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="#kontakt">Kontakta oss</Link>
        </Button>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="tjanster" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Våra tjänster</h2>
          <p className="mt-4 text-lg text-muted-foreground">
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
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="hur-det-gar-till" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Så går det till</h2>
          <p className="mt-4 text-lg text-muted-foreground">Vanliga frågor och svar om vår process och våra tjänster.</p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <Button size="lg" asChild><Link href="#kontakt">Kontakt</Link></Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-johan');
  return (
    <section id="om-oss" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
          <div className="md:col-span-2">
            {aboutImage && (
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                <Image src={aboutImage.imageUrl} alt={aboutImage.description} fill className="object-cover" data-ai-hint={aboutImage.imageHint} sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
            )}
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Om oss</h2>
            <div className="mt-6 text-lg text-muted-foreground space-y-4">
              <p>Johan Bergman har en bakgrund som arbetande konsult inom byggbranchen och grundade Umefog 2020 med ambitionen att erbjuda professionella fognings- och tätningstjänster till fastighetsägare och byggföretag i norra Sverige. Företaget består idag av ett mindre team och arbetar med alla typer av fastigheter som flerbostadshus, kommersiella fastigheter och industrilokaler, med särskild kompetens inom sågverksmiljöer och andra krävande industrimiljöer.</p>
              <p>För Umefog är långsiktiga kundrelationer en självklar del av verksamheten. Genom tydlig kommunikation, hög yrkesskicklighet och ett personligt bemötande strävar företaget efter att leverera arbeten med hög kvalitet, något som uppskattas av kunderna och bidrar till ett bra samarbete.</p>
            </div>
            <Button asChild size="lg" className="mt-8"><Link href="#kontakt">Kontakt</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  const tullkammarenImage = PlaceHolderImages.find(img => img.id === 'tullkammaren');
  return (
    <section id="referenser" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Referenser</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <Card>
            <CardHeader>
              <User className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="font-headline text-xl">BRF</CardTitle>
              <CardDescription>HSB Bostadsrättsförening Flyttfågeln i Umeå</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Fogrenovering av fogar på mellan betongblock på inglasade balkonger som börjat läcka in regnvatten.</p>
              <div className="mt-4 text-sm space-y-1">
                <p className="font-semibold">Kontakt: Mats Framell</p>
                <p>073-028 22 48</p>
                <p>vicevard3229@outlook.com</p>
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-1 lg:col-span-1">
            <CardHeader>
              <Building className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="font-headline text-xl">Byggföretag</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                {byggforetag.map(name => <li key={name}>{name}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Flame className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="font-headline text-xl">Sågverk</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                {sagverk.map(name => <li key={name}>{name}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
         <Card className="mt-8 w-full">
          <div className="grid md:grid-cols-2 items-center">
            {tullkammarenImage && <div className="relative aspect-video md:aspect-auto md:h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none overflow-hidden">
                <Image src={tullkammarenImage.imageUrl} alt={tullkammarenImage.description} fill className="object-cover" data-ai-hint={tullkammarenImage.imageHint} />
            </div>}
            <div className="p-6">
                <h3 className="font-headline text-xl font-bold">Specialfastigheter</h3>
                <p className="mt-2 text-muted-foreground">På den K-märkta fastigheten Tullkammaren i Umeå från 1901 utförde Umefog fönsterfogning både invändigt och utvändigt. I det projektet ställdes höga krav, bland annat när det gällde kulören som specialbeställdes för att stämma överens med fastighetens uttryck.</p>
            </div>
          </div>
        </Card>
         <div className="text-center mt-12">
            <Button size="lg" asChild><Link href="#kontakt">Kontakt</Link></Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
    return (
        <section id="kontakt" className="py-16 md:py-24 bg-background">
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}

    