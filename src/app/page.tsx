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

const ServiceDetail = ({ id, title, children, titleId }: { id: string, titleId: string, title: string, children: React.ReactNode }) => (
  <div id={id} className="max-w-3xl mx-auto">
    <h3 id={titleId} className="font-headline text-2xl md:text-3xl font-bold">{title}</h3>
    <div className="mt-4 text-lg text-muted-foreground space-y-4">{children}</div>
  </div>
);

function DetailedServicesSection() {
  const nyproduktionServices = (
    <>
      <ServiceDetail id="nyproduktion-fasadfogning" titleId="nyproduktion-fasadfogning-title" title="Fasadfogning (mjukfogning)">
        <p>Fastigheter med fasader av tegel, puts eller betongelement behöver fogas för att skapa ett tätt och skyddande klimatskal. Eftersom fasaden påverkas av temperaturväxlingar och rör sig är fogen flexibel och anpassas efter dessa rörelser. I en nyproduktion kan fogningsarbetet påbörjas direkt när väggarna är färdigställda.</p>
        <p>Rätt utförd fogning spelar en central roll i att förhindra vatten- och värmeläckage, förbättra fastighetens energieffektivitet och säkra ett långsiktigt skydd mot fuktskador. Det är en viktig del i att skapa en hållbar fastighet som står emot både väder och vind.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-dorr-fonster" titleId="nyproduktion-dorr-fonster-title" title="Dörr- och fönsterfogning">
        <p>Dörrar och fönster i flerbostadshus, kommersiella fastigheter och industrilokaler behöver fogas för att skapa täta och energieffektiva anslutningar mellan karm och fasad. Oavsett om det handlar om plast- och träfönster i bostäder eller metalldörrar i industriella miljöer är fogningen en avgörande del för att förhindra drag, fuktinträngning och värmeförluster. Eftersom fastigheten rör sig vid temperaturförändringar måste fogen vara flexibel och anpassad för att klara dessa rörelser utan att spricka eller släppa.</p>
        <p>Korrekt utförd dörr- och fönsterfogning bidrar till en förbättrad energieffektivitet, ett behagligare inomhusklimat och ett långsiktigt skydd mot fuktskador. Det är en viktig åtgärd för att skapa både komfort och hållbarhet i fastigheten över tid.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-golvfogning" titleId="nyproduktion-golvfogning-title" title="Golvfogning">
        <p>I industrimiljöer där golv regelbundet spolas av eller utsätts för väta är det viktigt att övergången mellan golv och vägg är helt tät. Golvfogning förhindrar att vatten tränger ner i konstruktionen vilket annars kan leda till fuktskador, försämrad hygien och i värsta fall påverka golvets och fastighetens hållbarhet.</p>
        <p>Genom att täta golvets anslutningar skapas en skyddande barriär som klarar både vätska, belastning och rörelser mellan olika material. Rätt utförd golvtätning bidrar till en mer slitstark miljö, enklare rengöring och en säkrare arbetsplats, särskilt i lokaler där höga krav ställs på hygien och funktion.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-kok-badrum" titleId="nyproduktion-kok-badrum-title" title="Kök- och badrumsfogning">
        <p>Vid nybyggnation av kök och badrum är korrekt fogning en avgörande del för att skapa täta och hållbara ytor. I utrymmen där kakel och klinker möter väggar, hörn eller stänkskydd behövs fogar som förhindrar fuktinträngning. Detta är särskilt viktigt i miljöer som dagligen utsätts för vatten, ånga och temperaturskillnader.</p>
        <p>Rätt utförd fogning bidrar till att skydda underliggande material mot fuktskador, förlänger livslängden på ytskikten och skapar en snygg och hygienisk finish. Det är en viktig detalj som ser till att kök och badrum håller långsiktigt.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-brandtatning" titleId="nyproduktion-brandtatning-title" title="Brandtätning">
        <p>Brandtätning är nödvändig vid genomföringar i brandklassade väggar, golv och tak där exempelvis ventilationsrör, vattenledningar eller elkablar passerar genom konstruktionen. För att upprätthålla fastighetens brandskydd måste dessa öppningar tätas med särskilda brandklassade fogar som förhindrar att eld, rök och heta gaser sprids mellan olika brandceller.</p>
        <p>Korrekt utförd brandtätning är avgörande för att konstruktionen ska behålla sin brandtekniska funktion vid en eventuell brand. Umefog är utbildade i Sikas brandtätningssystem och arbetar enligt gällande krav och standarder för att säkerställa ett tryggt och långsiktigt skydd i fastigheten.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-ljudtatning" titleId="nyproduktion-ljudtatning-title" title="Ljudtätning">
        <p>I industrier, kontorsbyggnader och andra miljöer där det ställs höga krav på arbetsro och integritet är ljudtätning en viktig del av fastighetens funktion. Genom att täta fogar och genomföringar minskas spridningen av både buller och oönskat ljud mellan rum och avdelningar vilket bidrar till en mer behaglig miljö.</p>
        <p>Rätt utförd ljudtätning skapar inte bara ett lugnare arbetsklimat utan säkerställer även att samtal och känslig information inte sprids till närliggande utrymmen.</p>
      </ServiceDetail>
      <ServiceDetail id="nyproduktion-sagverk" titleId="nyproduktion-sagverk-title" title="Sågverksmiljöer">
        <p>Umefog har specialkompetens inom arbete i sågverksindustrier och lokaler för virkestorkar. Det är miljöer som ställer extremt höga krav på fogarna då de utsätts för mycket höga temperaturer på uppemot 100 grader samt syror som successivt bryter ner materialet vilket gör att de ofta är utslitna redan efter cirka tre år.</p>
        <p>Om fogarna inte underhålls regelbundet riskerar stora mängder värme att läcka ut vilket leder till onödig energiförlust och sämre torkeffektivitet. Det i sin tur förlänger torktiden för virket och påverkar både produktion och ekonomi.</p>
      </ServiceDetail>
    </>
  );
  
    const renoveringServices = (
    <>
      <ServiceDetail id="renovering-fasadfog" titleId="renovering-fasadfog-title" title="Renovering av fasadfog">
        <p>Fastigheter med fasader av tegel, puts eller betongelement behöver med tiden få sina fogar renoverade för att behålla ett tätt och skyddande klimatskal. Eftersom fasaden påverkas av temperaturväxlingar och rör sig är fogen flexibel och anpassas efter dessa rörelser. Vid renovering av befintliga fastigheter avlägsnas gamla, uttjänta fogar och ersätts med nya för att återställa fasadens täthet och funktion.</p>
        <p>Rätt utförd fogrenovering spelar en central roll i att förhindra vatten- och luftläckage, förbättra fastighetens energieffektivitet och säkra ett långsiktigt skydd mot fuktskador. Det är en viktig del i att bevara en hållbar fastighet som står emot både väder och vind.</p>
      </ServiceDetail>
      <ServiceDetail id="renovering-dorr-fonster" titleId="renovering-dorr-fonster-title" title="Renovering av dörr- och fönsterfogar">
        <p>Dörrar och fönster i flerbostadshus, kommersiella fastigheter och industrilokaler behöver med tiden få sina fogar utbytta för att bibehålla täta och energieffektiva anslutningar mellan karm och fasad. Oavsett om det handlar om plast- och träfönster i bostäder eller metalldörrar i industriella miljöer är fogrenovering en avgörande del för att motverka drag, fuktinträngning och värmeförluster.</p>
        <p>Eftersom fastigheten rör sig vid temperaturförändringar måste den nya fogen vara flexibel och anpassad för att klara dessa rörelser utan att spricka eller släppa. Korrekt utförd fogrenovering bidrar till förbättrad energieffektivitet, ett behagligare inomhusklimat och ett långsiktigt skydd mot fuktskador.</p>
      </ServiceDetail>
      <ServiceDetail id="renovering-golvfogar" titleId="renovering-golvfogar-title" title="Renovering av golvfogar">
        <p>I industrimiljöer där golv regelbundet spolas av eller utsätts för väta behöver befintliga fogar ses över och vid behov renoveras för att säkerställa full täthet mellan golv och vägg. Slitna eller skadade fogar kan annars leda till att vätskor tränger ner i konstruktionen vilket kan orsaka fuktskador, försämrad hygien och påverka fastighetens hållbarhet.</p>
        <p>Genom att renovera golvfogar återställs en skyddande barriär som klarar både vätska, belastning och rörelser mellan olika material. Rätt utförd golvfogning bidrar till en mer slitstark miljö, enklare rengöring och en säkrare arbetsplats.</p>
      </ServiceDetail>
      <ServiceDetail id="renovering-kok-badrum" titleId="renovering-kok-badrum-title" title="Renovering av kök- och badrumsfogar">
        <p>Vid renovering av kök och badrum är fogar en viktig del för att säkerställa täta och hållbara ytor. I utrymmen där kakel och klinker möter väggar, hörn eller stänkskydd behöver gamla fogar ofta bytas ut för att förhindra fuktinträngning. Detta är särskilt viktigt i miljöer som dagligen utsätts för vatten, ånga och temperaturskillnader.</p>
        <p>Rätt utförd omfogning skyddar underliggande material mot fuktskador, och förlänger livslängden på ytskikten.</p>
      </ServiceDetail>
      <ServiceDetail id="renovering-brandtatning" titleId="renovering-brandtatning-title" title="Brandtätning i befintliga fastigheter">
        <p>Vid ombyggnationer, renoveringar eller kompletterande installationer i befintliga fastigheter uppstår ibland nya genomföringar i brandklassade väggar, golv och tak. För att upprätthålla fastighetens brandskydd måste dessa öppningar tätas med brandklassade fogar som förhindrar att eld, rök och heta gaser sprids mellan brandceller.</p>
        <p>Korrekt utförd brandtätning är avgörande för att den befintliga konstruktionen ska behålla sin brandtekniska funktion. Umefog är utbildade i Sikas brandtätningssystem och arbetar enligt gällande krav och standarder för ett tryggt och långsiktigt skydd.</p>
      </ServiceDetail>
      <ServiceDetail id="renovering-ljudtatning" titleId="renovering-ljudtatning-title" title="Ljudtätning i befintliga fastigheter">
        <p>I befintliga industrier, kontorsbyggnader och andra verksamhetsmiljöer kan behovet av förbättrad ljudisolering uppstå över tid. Genom att renovera och komplettera fogar och genomföringar minskas spridningen av både buller och oönskat ljud mellan rum och avdelningar.</p>
        <p>Rätt utförd ljudtätning bidrar till ett lugnare arbetsklimat och säkerställer att samtal och känslig information inte sprids till närliggande utrymmen vilket är särskilt viktigt i miljöer med höga krav på arbetsro och integritet.</p>
      </ServiceDetail>
      <ServiceDetail id="renovering-sagverk" titleId="renovering-sagverk-title" title="Sågverksmiljöer">
        <p>Umefog har specialkompetens inom arbete i sågverksindustrier och lokaler för virkestorkar. Det är miljöer som ställer extremt höga krav på fogarna då de utsätts för mycket höga temperaturer på uppemot 100 grader samt syror som successivt bryter ner materialet vilket gör att de ofta är utslitna redan efter cirka tre år.</p>
        <p>Om fogarna inte underhålls regelbundet riskerar stora mängder värme att läcka ut vilket leder till onödig energiförlust och sämre torkeffektivitet. Det i sin tur förlänger torktiden för virket och påverkar både produktion och ekonomi.</p>
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
          <TabsContent value="nyproduktion" id="nyproduktion" className="mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-12">Fogning och tätning kan tyckas vara en liten del av kostnaden vid nyproduktion men dess betydelse är desto större. Med noggrant utvalda material, korrekt dimensionering och lång erfarenhet skapar Umefog hållbara lösningar som minskar framtida skador och kostsamma renoveringar av fastigheter.</p>
            </div>
            <div className="space-y-16">{nyproduktionServices}</div>
            <div className="text-center mt-16">
              <Button size="lg" asChild><Link href="#kontakt">Kontakt</Link></Button>
            </div>
          </TabsContent>
          <TabsContent value="renovering" id="renovering" className="mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-12">Betydelsen av fogning och tätning vid renoveringar i befintliga fastigheter är stor. Med noggrant utvalda material, korrekt dimensionering och lång erfarenhet skapar Umefog hållbara lösningar som förebygger fortsatta skador och minskar risken för kostsamma framtida åtgärder.</p>
            </div>
            <div className="space-y-16">{renoveringServices}</div>
             <div className="text-center mt-16">
              <Button size="lg" asChild><Link href="#kontakt">Kontakt</Link></Button>
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
    <section id="referenser" className="py-16 md:py-24 bg-background">
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
