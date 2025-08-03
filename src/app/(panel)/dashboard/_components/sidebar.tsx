"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { List } from 'lucide-react';

export default function SiderbarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className='flex min-h-screen w-full'>
      <div className={clsx("flex flex-1 flex-col transition-all duration-300", {
        "md:ml-20": isCollapsed,
        "md:ml-64": !isCollapsed,
      })} >

        <header className='md:hidden flex items-center justify-between border-b px-2 md:px-4 h-14 z-10 sticky top-0 bg-white'>
          <Sheet>
            <div className='flex items-center gap-4'>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <List className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <h1 className='text-base md:text-lg font-semibold'>
                Menu OdontoPRO
              </h1>
            </div>
            <SheetContent side="right" className="sm:max-w-xs">
              <SheetTitle>Menu OdontoPRO</SheetTitle>
              <SheetDescription>Menu Administrativo</SheetDescription>
              <nav><p>TESTE</p></nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 py-4 px-2 md:p-6">
          {children}
        </main>

      </div>
    </div >
  )
}

