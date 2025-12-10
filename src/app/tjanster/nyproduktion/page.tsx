import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ServiceDetail = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <div id={id} className="max-w-4xl mx-auto scroll-mt-20">
    <h2 className="font-headline text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-4">
      <span className="w-1 h-8 bg-orange-500"></span>
      {title}
    </h2>
    <div className="mt-6 text-lg text-slate-600 space-y-4">{children}</div>
  </div>
);

export default function NyproduktionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
               <h1 className="font-headline text-4xl md:text-5xl font-bold text-center">Nyproduktion</h1>
               <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">Fogning och tätning kan tyckas vara en liten del av kostnaden vid nyproduktion men dess betydelse är desto större. Med noggrant utvalda material, korrekt dimensionering och lång erfarenhet skapar Umefog hållbara lösningar som minskar framtida skador och kostsamma renoveringar av fastigheter.</p>
               
               <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                   <Image src="/IMG_7606.jpg" alt="Fogningsarbete" fill className="object-cover" />
                 </div>
                 <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                   <Image src="/IMG_7603.jpg" alt="Fogningsarbete" fill className="object-cover" />
                 </div>
                 <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                   <Image src="/IMG_7602.jpg" alt="Fogningsarbete" fill className="object-cover" />
                 </div>
                 <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                   <Image src="/IMG_7601.jpg" alt="Fogningsarbete" fill className="object-cover" />
                 </div>
               </div>
            </div>
            <div className="space-y-20 mt-20">
                <ServiceDetail id="fasadfogning" title="Fasadfogning (mjukfogning)">
                    <p>Fastigheter med fasader av tegel, puts eller betongelement behöver fogas för att skapa ett tätt och skyddande klimatskal. Eftersom fasaden påverkas av temperaturväxlingar och rör sig är fogen flexibel och anpassas efter dessa rörelser. I en nyproduktion kan fogningsarbetet påbörjas direkt när väggarna är färdigställda.</p>
                    <p>Rätt utförd fogning spelar en central roll i att förhindra vatten- och värmeläckage, förbättra fastighetens energieffektivitet och säkra ett långsiktigt skydd mot fuktskador. Det är en viktig del i att skapa en hållbar fastighet som står emot både väder och vind.</p>
                </ServiceDetail>
                <ServiceDetail id="dorr-fonster" title="Dörr- och fönsterfogning">
                    <p>Dörrar och fönster i flerbostadshus, kommersiella fastigheter och industrilokaler behöver fogas för att skapa täta och energieffektiva anslutningar mellan karm och fasad. Oavsett om det handlar om plast- och träfönster i bostäder eller metalldörrar i industriella miljöer är fogningen en avgörande del för att förhindra drag, fuktinträngning och värmeförluster. Eftersom fastigheten rör sig vid temperaturförändringar måste fogen vara flexibel och anpassad för att klara dessa rörelser utan att spricka eller släppa.</p>
                    <p>Korrekt utförd dörr- och fönsterfogning bidrar till en förbättrad energieffektivitet, ett behagligare inomhusklimat och ett långsiktigt skydd mot fuktskador. Det är en viktig åtgärd för att skapa både komfort och hållbarhet i fastigheten över tid.</p>
                </ServiceDetail>
                <ServiceDetail id="golvfogning" title="Golvfogning">
                    <p>I industrimiljöer där golv regelbundet spolas av eller utsätts för väta är det viktigt att övergången mellan golv och vägg är helt tät. Golvfogning förhindrar att vatten tränger ner i konstruktionen vilket annars kan leda till fuktskador, försämrad hygien och i värsta fall påverka golvets och fastighetens hållbarhet.</p>
                    <p>Genom att täta golvets anslutningar skapas en skyddande barriär som klarar både vätska, belastning och rörelser mellan olika material. Rätt utförd golvtätning bidrar till en mer slitstark miljö, enklare rengöring och en säkrare arbetsplats, särskilt i lokaler där höga krav ställs på hygien och funktion.</p>
                </ServiceDetail>
                <ServiceDetail id="kok-badrum" title="Kök- och badrumsfogning">
                    <p>Vid nybyggnation av kök och badrum är korrekt fogning en avgörande del för att skapa täta och hållbara ytor. I utrymmen där kakel och klinker möter väggar, hörn eller stänkskydd behövs fogar som förhindrar fuktinträngning. Detta är särskilt viktigt i miljöer som dagligen utsätts för vatten, ånga och temperaturskillnader.</p>
                    <p>Rätt utförd fogning bidrar till att skydda underliggande material mot fuktskador, förlänger livslängden på ytskikten och skapar en snygg och hygienisk finish. Det är en viktig detalj som ser till att kök och badrum håller långsiktigt.</p>
                </ServiceDetail>
                <ServiceDetail id="brandtatning" title="Brandtätning">
                    <p>Brandtätning är nödvändig vid genomföringar i brandklassade väggar, golv och tak där exempelvis ventilationsrör, vattenledningar eller elkablar passerar genom konstruktionen. För att upprätthålla fastighetens brandskydd måste dessa öppningar tätas med särskilda brandklassade fogar som förhindrar att eld, rök och heta gaser sprids mellan olika brandceller.</p>
                    <p>Korrekt utförd brandtätning är avgörande för att konstruktionen ska behålla sin brandtekniska funktion vid en eventuell brand. Umefog är utbildade i Sikas brandtätningssystem och arbetar enligt gällande krav och standarder för att säkerställa ett tryggt och långsiktigt skydd i fastigheten.</p>
                </ServiceDetail>
                <ServiceDetail id="ljudtatning" title="Ljudtätning">
                    <p>I industrier, kontorsbyggnader och andra miljöer där det ställs höga krav på arbetsro och integritet är ljudtätning en viktig del av fastighetens funktion. Genom att täta fogar och genomföringar minskas spridningen av både buller och oönskat ljud mellan rum och avdelningar vilket bidrar till en mer behaglig miljö.</p>
                    <p>Rätt utförd ljudtätning skapar inte bara ett lugnare arbetsklimat utan säkerställer även att samtal och känslig information inte sprids till närliggande utrymmen.</p>
                </ServiceDetail>
                <ServiceDetail id="sagverksmiljoer" title="Sågverksmiljöer">
                    <p>Umefog har specialkompetens inom arbete i sågverksindustrier och lokaler för virkestorkar. Det är miljöer som ställer extremt höga krav på fogarna då de utsätts för mycket höga temperaturer på uppemot 100 grader samt syror som successivt bryter ner materialet vilket gör att de ofta är utslitna redan efter cirka tre år.</p>
                    <p>Om fogarna inte underhålls regelbundet riskerar stora mängder värme att läcka ut vilket leder till onödig energiförlust och sämre torkeffektivitet. Det i sin tur förlänger torktiden för virket och påverkar både produktion och ekonomi.</p>
                </ServiceDetail>
                <div className="text-center mt-20 max-w-4xl mx-auto">
                    <Button size="lg" asChild className="px-8 py-6 text-lg"><Link href="/#kontakt">Kontakt</Link></Button>
                </div>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}

    