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

const mainNavLinks = [
  { href: "#hur-det-gar-till", label: "Så Går Det Till" },
  { href: "#referenser", label: "Referenser" },
  { href: "#om-oss", label: "Om Oss" },
];

const servicesLinks = [
    { href: "#tjanster", label: "Alla tjänster" },
    { href: "#nyproduktion", label: "Nyproduktion" },
    { href: "#renovering", label: "Renovering" },
];

export function AppHeader() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold font-headline text-xl">Umefog</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Tjänster
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {servicesLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground text-foreground/60 px-3 py-2 rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#kontakt">Kontakta Oss</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Öppna meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetClose asChild>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <span className="font-bold font-headline text-lg">Umefog</span>
                </Link>
              </SheetClose>
              <div className="flex flex-col space-y-3 mt-6">
                <SheetClose asChild>
                  <Link href="#tjanster" className="font-medium text-lg">Tjänster</Link>
                </SheetClose>
                <div className="flex flex-col space-y-2 pl-4 border-l">
                    {servicesLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link href={link.href} className="text-muted-foreground">{link.label}</Link>
                        </SheetClose>
                    ))}
                </div>
                {mainNavLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-lg"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4">
                    <Link href="#kontakt">Kontakta Oss</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
