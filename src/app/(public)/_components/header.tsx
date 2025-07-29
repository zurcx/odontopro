import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[999] py-4 px-6 bg-white"
    >
      <div className="container mx-auto flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <a href="#">Profissionais</a>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="lg:hidden" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[240px] md:w-[320px] z-[9999]">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Veja nossos links
            </SheetDescription>

          </SheetContent>

        </Sheet>

      </div>
    </header >

  )
}
