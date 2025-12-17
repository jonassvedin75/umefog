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
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Umefog Sundsvall - Fasadfogning & Brandtätning | Professionell Fuktskydd',
  description: 'Umefog erbjuder professionell fasadfogning, brandtätning, ljudtätning och skydd mot värmeläckage i Sundsvall. Kontakta oss för offert!',
};

const serviceCards: { icon: LucideIcon; title: string; description: string; }[] = [
  { icon: Building2, title: "Fasadfogning", description: "Elastisk tätning av fasader i tegel, puts och betongelement." },
  { icon: Droplets, title: "Golvfogning", description: "Fogning av industrigolv där täthet krävs vid spolning och vätskeexponering." },
  { icon: DoorOpen, title: "Dörr- och fönsterfogning", description: "Energieffektiv tätning runt dörrar och fönster i alla typer av fastigheter." },
  { icon: Bath, title: "Kök- och badrumsfogning", description: "Fuktanpassad fogning i kök och våtutrymmen." },
  { icon: Flame, title: "Brandtätning", description: "Säker tätning av genomföringar i brandklassade konstruktioner." },
  { icon: Waves, title: "Ljudtätning", description: "Dämpning av ljud för bättre arbetsmiljö och ökad sekretess." },
];

const faqItems = [
  {
    question: "Hur beställer jag arbetet hos Umefog i Sundsvall?",
    answer: "Fastighetsägare, byggentreprenörer eller industrier i Sundsvall och omnejd som har behov av fogning och tätning skickar in underlag till Umefog. Därefter väljer de upplägg beroende på behov och projektets omfattning. De kan välja ett fast pris där vi beräknar kostnader för material, arbete och övriga moment, eller ett löpande pris där kunden får ta del av en tydlig prislista."
  },
  {
    question: "Hur säkerställer Umefog rätt lösning för varje fastighet?",
    answer: "Alla fastigheter har sina unika förutsättningar och vissa uppdrag kräver extra hänsyn. Därför är noggrann kommunikation och lång erfarenhet avgörande. I äldre fastigheter och kulturmärkta fastigheter krävs ofta specialanpassade metoder och material för att både bevara fastighetens karaktär och uppfylla tekniska krav."
  },
  {
    question: "Hur länge håller fogarna?",
    answer: "Fogarnas livslängd varierar men som tumregel bör de inspekteras okulärt ungefär vart femte år. Hur länge fogarna håller påverkas av vilken verksamhet som pågår i fastigheten, till exempel slitage och fukt i invändiga miljöer samt temperaturväxlingar och väderpåverkan för utvändiga fogar. Redan vid en enkel genomgång går det att upptäcka tecken på slitage som sprickor, missfärgning eller att fogen lossnat från underlaget."
  },
  {
    question: "Vad händer om fogarna inte renoveras i tid?",
    answer: "Om slitna fogar inte åtgärdas i tid ökar risken för att regnvatten tränger in i konstruktionen, vilket kan leda till fuktskador i fasaden och i förlängningen kostsamma renoveringar. Regelbunden kontroll och underhåll är därför en viktig del i att bevara fastighetens skick och funktion över tid."
  },
  {
    question: "Vilka produkter använder Umefog?",
    answer: "Umefog arbetar med noggrant utvalda produkter från Sika, Soudal, HABE och Byggtema, leverantörer som är kända för hög kvalitet, lång hållbarhet och lösningar anpassade för professionell fogning och tätning i både bygg- och industrimiljöer. Tillsammans ger dessa leverantörer Umefog möjlighet att erbjuda säkra, hållbara och skräddarsydda lösningar för varje fastighet."
  }
];

const byggforetag = ["OF Bygg AB", "Contractor Bygg I Umeå AB", "Prefabmästarna Sverige AB", "Hedin Construction Byggservice AB", "Rekab Entreprenad AB", "Northpower Stålhallar AB", "Skanska Sverige AB"];
const sagverk = ["Setra Trävaror AB", "Norra Timber AB"];

function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="/Tullkammaren.jpeg"
        alt="Fasadfogning och brandtätning i Sundsvall - professionell fuktskydd och värmeisolering"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70" />
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Specialister på fogning och brandtätning i Sundsvall
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
           Umefog är specialister på fasadfogning, brandtätning och ljudtätning i Sundsvall och Medelpad. Vi erbjuder professionella tjänster inom fogtätning och passivt brandskydd för både nyproduktion och befintliga fastigheter i regionen.
        </p>
        <Button asChild size="lg" className="mt-10 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
          <Link href="#kontakt">Kontakta oss</Link>
        </Button>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="tjanster" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Våra tjänster</h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            Vi arbetar i hela Sundsvallsområdet med allt från fasadfogning till brandtätning. Med rätt material och lång erfarenhet skapar vi hållbara lösningar som skyddar fastigheter mot fukt, värmeläckage, brand och ljud.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center border-slate-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <CardHeader className="items-center">
                <div className="bg-orange-50 p-5 rounded-2xl group-hover:bg-orange-100 transition-colors">
                  <service.icon className="w-9 h-9 text-orange-500" />
                </div>
                <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild className="px-8 py-6 text-lg">
            <Link href="/tjanster">Alla tjänster</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="hur-det-gar-till" className="py-20 md:py-28 bg-slate-50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Så går det till</h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600">Vanliga frågor och svar om vår process och våra tjänster.</p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-14">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-slate-200">
              <AccordionTrigger className="text-lg text-left hover:no-underline hover:text-orange-500 transition-colors py-5">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-14">
          <Button size="lg" asChild className="px-8 py-6 text-lg"><Link href="#kontakt">Kontakt</Link></Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="om-oss" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">
          <div className="md:col-span-2">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/IMG_7661.jpg" alt="Professionell fasadfogning och tätningsarbete - skydd mot fukt och värmeläckage" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Om oss</h2>
            <div className="mt-8 text-lg text-slate-600 space-y-5 leading-relaxed">
              <p>Johan Bergman har en bakgrund som arbetande konsult inom byggbranchen och grundade Umefog 2020 med ambitionen att erbjuda professionella fognings- och tätningstjänster till fastighetsägare och byggföretag i norra Sverige. Företaget består idag av ett mindre team och arbetar med alla typer av fastigheter som flerbostadshus, kommersiella fastigheter och industrilokaler.</p>
              <p>För Umefog är långsiktiga kundrelationer en självklar del av verksamheten. Genom tydlig kommunikation, hög yrkesskicklighet och ett personligt bemötande strävar vi efter att leverera arbeten med hög kvalitet, något som uppskattas av våra kunder i Sundsvall och övriga delar av norra Sverige.</p>
            </div>
            <Button asChild size="lg" className="mt-10 px-8 py-6 text-lg"><Link href="#kontakt">Kontakt</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  return (
    <section id="referenser" className="py-20 md:py-28 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Referenser</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <Card className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <User className="w-9 h-9 text-orange-500 mb-3" />
              <CardTitle className="font-headline text-xl">BRF</CardTitle>
              <CardDescription className="text-slate-600">HSB Bostadsrättsförening Flyttfågeln i Umeå</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">Fogrenovering av fogar på mellan betongblock på inglasade balkonger som börjat läcka in regnvatten.</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-1 lg:col-span-1 border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building className="w-9 h-9 text-orange-500 mb-3" />
              <CardTitle className="font-headline text-xl">Byggföretag</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm">
                {byggforetag.map(name => <li key={name}>{name}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Flame className="w-9 h-9 text-orange-500 mb-3" />
              <CardTitle className="font-headline text-xl">Sågverk</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm">
                {sagverk.map(name => <li key={name}>{name}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
         <Card className="mt-10 w-full border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative aspect-video md:aspect-auto md:h-full">
              <Image src="/skyline.jpeg" alt="Fönsterfogning och fasadtätning - energieffektiv ljudtätning och fuktskydd" fill className="object-cover" />
            </div>
            <div className="p-8">
                <h3 className="font-headline text-2xl font-bold">Specialfastigheter</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">På den K-märkta fastigheten Tullkammaren i Umeå från 1901 utförde Umefog fönsterfogning både invändigt och utvändigt. I det projektet ställdes höga krav, bland annat när det gällde kulören som specialbeställdes för att stämma överens med fastighetens uttryck.</p>
            </div>
          </div>
        </Card>
         <div className="text-center mt-14">
            <Button size="lg" asChild className="px-8 py-6 text-lg"><Link href="#kontakt">Kontakt</Link></Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
    return (
        <section id="kontakt" className="py-20 md:py-28 bg-white">
            <div className="container grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Kontakt</h2>
                    <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                        Har du frågor eller vill du ha en offert för arbete i Sundsvall? Kontakta oss så återkommer vi så snart som möjligt.
                    </p>
                    <div className="mt-10 space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="bg-orange-50 p-4 rounded-2xl"><Phone className="w-7 h-7 text-orange-500"/></div>
                            <div>
                                <h3 className="font-semibold text-xl mb-1">Johan Bergman</h3>
                                <a href="tel:0761355152" className="text-lg text-slate-600 hover:text-orange-500 transition-colors">076-135 51 52</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Card className="shadow-xl border-slate-200">
                        <CardHeader className="pb-6">
                            <CardTitle className="font-headline text-2xl">Kontaktuppgifter</CardTitle>
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

export default function SundsvallPage() {
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
