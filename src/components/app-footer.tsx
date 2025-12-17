import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { CopyrightYear } from "./copyright-year";
import Image from "next/image";

const footerNav = [
    { href: "/", label: "Hem" },
    { href: "/tjanster", label: "Tjänster" },
    { href: "/#hur-det-gar-till", label: "Så går det till" },
    { href: "/#referenser", label: "Referenser" },
    { href: "/#om-oss", label: "Om oss" },
    { href: "/#kontakt", label: "Kontakt" },
];

export function AppFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
             <Link href="/">
               <Image src="/Umefogvit.png" alt="Umefog logotyp" width={140} height={56} className="w-[140px] h-auto" />
             </Link>
            <p className="text-sm text-slate-400">Org.nr: 559237-2881</p>
            <div className="space-y-3">
                <p className="font-semibold text-lg">Johan Bergman</p>
                <a href="tel:0761355152" className="flex items-center gap-3 hover:text-orange-400 text-slate-300 transition-colors group">
                    <Phone className="h-5 w-5 group-hover:text-orange-400"/>
                    <span>076-135 51 52</span>
                </a>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="font-semibold mb-5 font-headline text-lg text-white">Länkar</h4>
              <ul className="space-y-3">
                {footerNav.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-orange-400 transition-colors text-sm text-slate-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 font-headline text-lg text-white">Urval av tjänster</h4>
              <ul className="space-y-3">
                <li><Link href="/tjanster/nyproduktion" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Nyproduktion</Link></li>
                <li><Link href="/tjanster/renovering" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Renovering</Link></li>
                <li><Link href="/tjanster/nyproduktion#brandtatning" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Brandtätning</Link></li>
                <li><Link href="/tjanster/nyproduktion#ljudtatning" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Ljudtätning</Link></li>
                <li><Link href="/tjanster/nyproduktion#sagverksmiljoer" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Sågverksmiljöer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 font-headline text-lg text-white">Vi arbetar bland annat i</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Umeå</Link></li>
                <li><Link href="/sundsvall" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Sundsvall</Link></li>
                <li><Link href="/ornskoldsvik" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Örnsköldsvik</Link></li>
                <li><Link href="/skelleftea" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Skellefteå</Link></li>
                <li><Link href="/pitea" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Piteå</Link></li>
                <li><Link href="/lulea" className="hover:text-orange-400 transition-colors text-sm text-slate-300">Luleå</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-10 text-center text-sm text-slate-400">
          <p>&copy; <CopyrightYear /> Umefog AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}

    