"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import React from "react";
import Image from "next/image";

const mainNavLinks = [
  { href: "/#hur-det-gar-till", label: "Så går det till" },
  { href: "/#referenser", label: "Referenser" },
  { href: "/#om-oss", label: "Om oss" },
];

const servicesLinks = [
    { href: "/tjanster", label: "Alla tjänster" },
    { href: "/tjanster/nyproduktion", label: "Nyproduktion" },
    { href: "/tjanster/renovering", label: "Renovering" },
];

export function AppHeader() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Umefogsvart.png" alt="Umefog logotyp" width={80} height={32} className="w-[80px] h-auto" priority />
        </Link>
        <nav className="hidden md:flex items-center space-x-1 text-base font-medium flex-1 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-slate-700 hover:text-orange-500 hover:bg-orange-50">
                Tjänster
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="border-slate-200">
                {servicesLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild className="hover:bg-orange-50 focus:bg-orange-50">
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-orange-500 text-slate-700 hover:bg-orange-50 px-4 py-2 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-4">
          <Button asChild className="hidden md:inline-flex shadow-md hover:shadow-lg transition-shadow">
            <Link href="#kontakt">Kontakt</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-orange-50 border-2 border-slate-700">
                <Menu className="h-6 w-6 stroke-[2]" />
                <span className="sr-only">Öppna meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-slate-200">
              <SheetClose asChild>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                   <Image src="/Umefogsvart.png" alt="Umefog logotyp" width={100} height={40} className="w-[100px] h-auto" />
                </Link>
              </SheetClose>
              <div className="flex flex-col space-y-3 mt-6">
                <SheetClose asChild>
                  <Link href="/tjanster" className="font-medium text-lg hover:text-orange-500 transition-colors">Tjänster</Link>
                </SheetClose>
                <div className="flex flex-col space-y-2 pl-4 border-l border-slate-200">
                    {servicesLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link href={link.href} className="text-slate-600 hover:text-orange-500 transition-colors">{link.label}</Link>
                        </SheetClose>
                    ))}
                </div>
                {mainNavLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-lg hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                   <Link href="/#kontakt" className="font-medium text-lg">Kontakt</Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    