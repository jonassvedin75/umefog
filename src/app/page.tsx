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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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
  { icon: Building2, title: "Fasadfogning", description: "Tätning och skydd av fasader i tegel, puts och betongelement.", href: "#nyproduktion-fasadfogning" },
  { icon: Droplets, title: "Golvfogning", description: "Fogning av industrigolv där täthet krävs vid spolning och vätskeexponering.", href: "#nyproduktion-golvfogning" },
  { icon: DoorOpen, title: "Dörr- och fönsterfogning", description: "Energieffektiv tätning runt dörrar och fönster i alla typer av fastigheter.", href: "#nyproduktion-dorr-fonster" },
  { icon: Bath, title: "Kök- och badrumsfogning", description: "Fuktanpassad fogning i kök och våtutrymmen.", href: "#nyproduktion-kok-badrum" },
  { icon: Flame, title: "Brandtätning", description: "Säker tätning av genomföringar i brandklassade konstruktioner.", href: "#nyproduktion-brandtatning" },
  { icon: Waves, title: "Ljudtätning", description: "Dämpning av ljud för bättre arbetsmiljö och ökad sekretess.", href: "#nyproduktion-ljudtatning" },
];

const faqItems = [
  {
    question: "Hur beställer jag arbetet hos Umefog?",
    answer: "Fastighetsägare, byggentreprenörer eller industrier som har behov av fogning och tätning skickar in underlag till oss. Beroende på projektets omfattning och era behov kan ni välja mellan ett fast pris, där vi beräknar alla kostnader i förväg, eller ett löpande pris baserat på en tydlig prislista för material och arbetstid."
  },
  {
    question: "Hur säkerställer Umefog rätt lösning för varje fastighet?",
    answer: "Varje fastighet är unik. Genom noggrann kommunikation och med vår långa erfarenhet säkerställer vi rätt lösning. För äldre och kulturmärkta fastigheter använder vi specialanpassade metoder och material för att bevara fastighetens karaktär samtidigt som vi uppfyller tekniska krav."
  },
  {
    question: "Hur länge håller fogarna?",
    answer: "Livslängden varierar, men en bra tumregel är att inspektera fogarna vart femte år. Faktorer som verksamhetens slitage, fukt, och väderpåverkan spelar stor roll. Tecken på slitage kan vara sprickor, missfärgning eller att fogen lossnat."
  },
  {
    question: "Vad händer om fogarna inte renoveras i tid?",
    answer: "Om slitna fogar inte åtgärdas i tid ökar risken för att regnvatten tränger in i konstruktionen, vilket kan leda till fuktskador och kostsamma renoveringar. Regelbunden kontroll är en klok investering för att bevara fastighetens värde och funktion."
  },
  {
    question: "Vilka produkter använder Umefog?",
    answer: "Vi arbetar med noggrant utvalda produkter från Sika, Soudal, HABE och Byggtema. Dessa leverantörer är kända för hög kvalitet och hållbarhet, vilket gör att vi kan erbjuda säkra och skräddarsydda lösningar för varje unikt projekt."
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
          Umefog är specialister på tätning och fogning i både nyproduktion och befintliga fastigheter, med särskild kompetens inom krävande industrimiljöer.
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
                  <Link href={service.href}>Läs mer &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceDetail = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <div id={id} className="max-w-3xl mx-auto">
    <h3 className="font-headline text-2xl md:text-3xl font-bold">{title}</h3>
    <div className="mt-4 text-lg text-muted-foreground space-y-4">{children}</div>
  </div>
);

function DetailedServicesSection() {
  const allServices = (
    <>
      <ServiceDetail id="nyproduktion-fasadfogning" title="Fasadfogning (mjukfogning)">
        <p>Fastigheter med fasader av tegel, puts eller betongelement behöver fogas för att skapa ett tätt och skyddande klimatskal. Rätt utförd fogning spelar en central roll i att förhindra vatten- och värmeläckage, förbättra fastighetens energieffektivitet och säkra ett långsiktigt skydd mot fuktskador.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-dorr-fonster" title="Dörr- och fönsterfogning">
        <p>Dörrar och fönster i alla typer av fastigheter behöver fogas för att skapa täta och energieffektiva anslutningar. Korrekt utförd dörr- och fönsterfogning bidrar till en förbättrad energieffektivitet, ett behagligare inomhusklimat och ett långsiktigt skydd mot fuktskador.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-golvfogning" title="Golvfogning">
        <p>I industrimiljöer där golv regelbundet spolas av eller utsätts for väta är det viktigt att övergången mellan golv och vägg är helt tät. Genom att täta golvets anslutningar skapas en skyddande barriär som klarar både vätska, belastning och rörelser.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-kok-badrum" title="Kök- och badrumsfogning">
        <p>Vid nybyggnation av kök och badrum är korrekt fogning en avgörande del för att skapa täta och hållbara ytor. Rätt utförd fogning skyddar underliggande material mot fuktskador, förlänger livslängden på ytskikten och skapar en snygg och hygienisk finish.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-brandtatning" title="Brandtätning">
        <p>Brandtätning är nödvändig vid genomföringar i brandklassade väggar, golv och tak. För att upprätthålla fastighetens brandskydd måste dessa öppningar tätas med särskilda brandklassade fogar. Umefog är utbildade i Sikas brandtätningssystem.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-ljudtatning" title="Ljudtätning">
        <p>I industrier och kontorsbyggnader är ljudtätning en viktig del. Genom att täta fogar och genomföringar minskas spridningen av buller och oönskat ljud, vilket bidrar till en mer behaglig miljö och ökad sekretess.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-sagverk" title="Sågverksmiljöer">
        <p>Umefog har specialkompetens inom arbete i sågverksindustrier och virkestorkar. Dessa miljöer ställer extremt höga krav på fogarna som utsätts för höga temperaturer och syror. Regelbundet underhåll förhindrar värmeläckage och optimerar produktionen.</p>
      </ServiceDetail>
    </>
  );

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <Tabs defaultValue="nyproduktion" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12">
            <TabsTrigger value="nyproduktion" className="h-10 text-base">Nyproduktion</TabsTrigger>
            <TabsTrigger value="renovering" className="h-10 text-base">Renovering</TabsTrigger>
          </TabsList>
          <TabsContent value="nyproduktion" className="mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-12">Fogning och tätning kan tyckas vara en liten del av kostnaden vid nyproduktion men dess betydelse är desto större. Med noggrant utvalda material, korrekt dimensionering och lång erfarenhet skapar Umefog hållbara lösningar som minskar framtida skador och kostsamma renoveringar av fastigheter.</p>
            </div>
            <div className="space-y-16">{allServices}</div>
            <div className="text-center mt-16">
              <Button size="lg" asChild><Link href="#kontakt">Kontakt för Nyproduktion</Link></Button>
            </div>
          </TabsContent>
          <TabsContent value="renovering" id="renovering" className="mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-12">Betydelsen av fogning och tätning vid renoveringar i befintliga fastigheter är stor. Med noggrant utvalda material, korrekt dimensionering och lång erfarenhet skapar Umefog hållbara lösningar som förebygger fortsatta skador och minskar risken för kostsamma framtida åtgärder.</p>
            </div>
            <div className="space-y-16">{allServices}</div>
             <div className="text-center mt-16">
              <Button size="lg" asChild><Link href="#kontakt">Kontakt för Renovering</Link></Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="hur-det-gar-till" className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Så Går Det Till</h2>
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
          <Button size="lg" asChild><Link href="#kontakt">Har du fler frågor? Kontakta oss</Link></Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-johan');
  return (
    <section id="om-oss" className="py-16 md:py-24 bg-secondary">
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Om Umefog</h2>
            <div className="mt-6 text-lg text-muted-foreground space-y-4">
              <p>Johan Bergman har en bakgrund som arbetande konsult inom byggbranschen och grundade Umefog 2020 med ambitionen att erbjuda professionella fognings- och tätningstjänster till fastighetsägare och byggföretag i norra Sverige.</p>
              <p>Företaget består idag av ett mindre team och arbetar med alla typer av fastigheter som flerbostadshus, kommersiella fastigheter och industrilokaler, med särskild kompetens inom sågverksmiljöer och andra krävande industrimiljöer.</p>
              <p>För Umefog är långsiktiga kundrelationer en självklar del av verksamheten. Genom tydlig kommunikation, hög yrkesskicklighet och ett personligt bemötande strävar företaget efter att leverera arbeten med hög kvalitet.</p>
            </div>
            <Button asChild size="lg" className="mt-8"><Link href="#kontakt">Kontakta Johan</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  const tullkammarenImage = PlaceHolderImages.find(img => img.id === 'tullkammaren');
  return (
    <section id="referenser" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Nöjda Kunder & Referenser</h2>
          <p className="mt-4 text-lg text-muted-foreground">Ett urval av projekt och samarbetspartners vi är stolta över.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <Card>
            <CardHeader>
              <User className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="font-headline text-xl">BRF</CardTitle>
              <CardDescription>HSB Brf Flyttfågeln i Umeå</CardDescription>
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
              <CardDescription>Ett urval av våra partners</CardDescription>
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
              <CardDescription>Specialkompetens för krävande miljöer</CardDescription>
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
                <h3 className="font-headline text-xl font-bold">Specialfastigheter: Tullkammaren</h3>
                <p className="mt-2 text-muted-foreground">På den K-märkta fastigheten Tullkammaren i Umeå från 1901 utförde Umefog fönsterfogning både invändigt och utvändigt. I det projektet ställdes höga krav, bland annat när det gällde kulören som specialbeställdes för att stämma överens med fastighetens uttryck.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function ContactSection() {
    return (
        <section id="kontakt" className="py-16 md:py-24 bg-secondary">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Kontakta Oss</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Har du frågor eller vill du ha en offert? Fyll i formuläret så återkommer vi så snart som möjligt. Du kan också nå oss direkt via telefon.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full"><Phone className="w-6 h-6 text-primary"/></div>
                            <div>
                                <h3 className="font-semibold text-lg">Ring Oss</h3>
                                <a href="tel:0761355152" className="text-muted-foreground hover:text-primary transition-colors">076-135 51 52</a>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full"><Mail className="w-6 h-6 text-primary"/></div>
                            <div>
                                <h3 className="font-semibold text-lg">Grundare & Kontaktperson</h3>
                                <p className="text-muted-foreground">Johan Bergman</p>
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
        <DetailedServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}
