import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ServiceDetail = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <div id={id} className="max-w-3xl mx-auto scroll-mt-20">
    <h2 className="font-headline text-2xl md:text-3xl font-bold">{title}</h2>
    <div className="mt-4 text-lg text-muted-foreground space-y-4">{children}</div>
  </div>
);

export default function RenoveringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
               <h1 className="font-headline text-4xl md:text-5xl font-bold">Renovering</h1>
               <p className="mt-4 text-lg text-muted-foreground mb-12">Betydelsen av fogning och tätning vid renoveringar i befintliga fastigheter är stor. Med noggrant utvalda material, korrekt dimensionering och lång erfarenhet skapar Umefog hållbara lösningar som förebygger fortsatta skador och minskar risken för kostsamma framtida åtgärder.</p>
            </div>
            <div className="space-y-16 text-center">
                <ServiceDetail id="fasadfog" title="Renovering av fasadfog">
                    <p>Fastigheter med fasader av tegel, puts eller betongelement behöver med tiden få sina fogar renoverade för att behålla ett tätt och skyddande klimatskal. Eftersom fasaden påverkas av temperaturväxlingar och rör sig är fogen flexibel och anpassas efter dessa rörelser. Vid renovering av befintliga fastigheter avlägsnas gamla, uttjänta fogar och ersätts med nya för att återställa fasadens täthet och funktion.</p>
                    <p>Rätt utförd fogrenovering spelar en central roll i att förhindra vatten- och luftläckage, förbättra fastighetens energieffektivitet och säkra ett långsiktigt skydd mot fuktskador. Det är en viktig del i att bevara en hållbar fastighet som står emot både väder och vind.</p>
                </ServiceDetail>
                <ServiceDetail id="dorr-fonster" title="Renovering av dörr- och fönsterfogar">
                    <p>Dörrar och fönster i flerbostadshus, kommersiella fastigheter och industrilokaler behöver med tiden få sina fogar utbytta för att bibehålla täta och energieffektiva anslutningar mellan karm och fasad. Oavsett om det handlar om plast- och träfönster i bostäder eller metalldörrar i industriella miljöer är fogrenovering en avgörande del för att motverka drag, fuktinträngning och värmeförluster.</p>
                    <p>Eftersom fastigheten rör sig vid temperaturförändringar måste den nya fogen vara flexibel och anpassad för att klara dessa rörelser utan att spricka eller släppa. Korrekt utförd fogrenovering bidrar till förbättrad energieffektivitet, ett behagligare inomhusklimat och ett långsiktigt skydd mot fuktskador.</p>
                </ServiceDetail>
                <ServiceDetail id="golvfogar" title="Renovering av golvfogar">
                    <p>I industrimiljöer där golv regelbundet spolas av eller utsätts för väta behöver befintliga fogar ses över och vid behov renoveras för att säkerställa full täthet mellan golv och vägg. Slitna eller skadade fogar kan annars leda till att vätskor tränger ner i konstruktionen vilket kan orsaka fuktskador, försämrad hygien och påverka fastighetens hållbarhet.</p>
                    <p>Genom att renovera golvfogar återställs en skyddande barriär som klarar både vätska, belastning och rörelser mellan olika material. Rätt utförd golvfogning bidrar till en mer slitstark miljö, enklare rengöring och en säkrare arbetsplats.</p>
                </ServiceDetail>
                <ServiceDetail id="kok-badrum" title="Renovering av kök- och badrumsfogar">
                    <p>Vid renovering av kök och badrum är fogar en viktig del för att säkerställa täta och hållbara ytor. I utrymmen där kakel och klinker möter väggar, hörn eller stänkskydd behöver gamla fogar ofta bytas ut för att förhindra fuktinträngning. Detta är särskilt viktigt i miljöer som dagligen utsätts för vatten, ånga och temperaturskillnader.</p>
                    <p>Rätt utförd omfogning skyddar underliggande material mot fuktskador, och förlänger livslängden på ytskikten.</p>
                </ServiceDetail>
                <ServiceDetail id="brandtatning" title="Brandtätning i befintliga fastigheter">
                    <p>Vid ombyggnationer, renoveringar eller kompletterande installationer i befintliga fastigheter uppstår ibland nya genomföringar i brandklassade väggar, golv och tak. För att upprätthålla fastighetens brandskydd måste dessa öppningar tätas med brandklassade fogar som förhindrar att eld, rök och heta gaser sprids mellan brandceller.</p>
                    <p>Korrekt utförd brandtätning är avgörande för att den befintliga konstruktionen ska behålla sin brandtekniska funktion. Umefog är utbildade i Sikas brandtätningssystem och arbetar enligt gällande krav och standarder för ett tryggt och långsiktigt skydd.</p>
                </ServiceDetail>
                <ServiceDetail id="ljudtatning" title="Ljudtätning i befintliga fastigheter">
                    <p>I befintliga industrier, kontorsbyggnader och andra verksamhetsmiljöer kan behovet av förbättrad ljudisolering uppstå över tid. Genom att renovera och komplettera fogar och genomföringar minskas spridningen av både buller och oönskat ljud mellan rum och avdelningar.</p>
                    <p>Rätt utförd ljudtätning bidrar till ett lugnare arbetsklimat och säkerställer att samtal och känslig information inte sprids till närliggande utrymmen vilket är särskilt viktigt i miljöer med höga krav på arbetsro och integritet.</p>
                </ServiceDetail>
                <ServiceDetail id="sagverksmiljoer" title="Sågverksmiljöer">
                    <p>Umefog har specialkompetens inom arbete i sågverksindustrier och lokaler för virkestorkar. Det är miljöer som ställer extremt höga krav på fogarna då de utsätts för mycket höga temperaturer på uppemot 100 grader samt syror som successivt bryter ner materialet vilket gör att de ofta är utslitna redan efter cirka tre år.</p>
                    <p>Om fogarna inte underhålls regelbundet riskerar stora mängder värme att läcka ut vilket leder till onödig energiförlust och sämre torkeffektivitet. Det i sin tur förlänger torktiden för virket och påverkar både produktion och ekonomi.</p>
                </ServiceDetail>
                <div className="text-center mt-16">
                    <Button size="lg" asChild><Link href="/#kontakt">Kontakt</Link></Button>
                </div>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}

    