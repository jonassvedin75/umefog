import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { CopyrightYear } from "./copyright-year";

const footerNav = [
    { href: "#", label: "Hem" },
    { href: "#tjanster", label: "Tjänster" },
    { href: "#hur-det-gar-till", label: "Så går det till" },
    { href: "#referenser", label: "Referenser" },
    { href: "#om-oss", label: "Om oss" },
    { href: "#kontakt", label: "Kontakt" },
];

export function AppFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold">Umefog AB</h3>
            <div className="space-y-2">
                <p className="font-semibold">Johan Bergman</p>
                <a href="tel:0761355152" className="flex items-center gap-2 hover:text-primary text-primary-foreground/90 transition-colors">
                    <Phone className="h-4 w-4"/>
                    <span>076-135 51 52</span>
                </a>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 font-headline text-lg">Länkar</h4>
              <ul className="space-y-2">
                {footerNav.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-primary transition-colors text-sm text-primary-foreground/70">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-headline text-lg">Urval av tjänster</h4>
              <ul className="space-y-2">
                <li><Link href="#nyproduktion" className="hover:text-primary transition-colors text-sm text-primary-foreground/70">Nyproduktion</Link></li>
                <li><Link href="#renovering" className="hover:text-primary transition-colors text-sm text-primary-foreground/70">Renovering</Link></li>
                <li><Link href="#nyproduktion-brandtatning-title" className="hover:text-primary transition-colors text-sm text-primary-foreground/70">Brandtätning</Link></li>
                <li><Link href="#nyproduktion-ljudtatning-title" className="hover:text-primary transition-colors text-sm text-primary-foreground/70">Ljudtätning</Link></li>
                <li><Link href="#nyproduktion-sagverk-title" className="hover:text-primary transition-colors text-sm text-primary-foreground/70">Sågverksmiljöer</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; <CopyrightYear /> Umefog AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
