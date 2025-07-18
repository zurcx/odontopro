"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LogIn, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const session = true; // Simulating session, replace with actual session logic if needed

  const navItems = [
    { href: "#", label: "Profissionais" },
    //{ href: "#/sobre", label: "Sobre" },
    //{ href: "#/contato", label: "Contato" },
  ]

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          onClick={() => setIsOpen(false)}
          key={item.href}
          asChild
          className="bg-transparent text-black hover:bg-transparent shaldow-none">
          <Link href={item.href} className="text-base">
            {item.label}
          </Link>
        </Button>
      ))}
      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center gap-2 justify-center"
        >
          Acessar a Clínica
        </Link>
      ) : (
        <Button>
          <LogIn />
          Portal da Clínica
        </Button>
      )}
    </>
  )

  return (
    <header
      className="fixed top-0 right-0 left-0 z[999] py-4 px-6 bg-white"
    >
      <div
        className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl text-zinc-900">
          Odonto<span className="text-teal-500">Pro</span>
        </Link>

        <nav className="hidden:md flex items-center ">
          <NavLinks />
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="text-black hover:bg-transparent variant-ghost size=icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w[240px] sm:w[300] z[999]">
            <SheetTitle>
              Menu
            </SheetTitle>
            <SheetHeader></SheetHeader>
            <SheetDescription>
              Veja os links:
            </SheetDescription>
            <nav className="flex flex-col space-x-4 mt-6">
              < NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header >
  )
}
