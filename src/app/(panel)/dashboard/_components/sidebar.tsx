'use client'
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
import { ChevronLeft, ChevronRight, List } from 'lucide-react';
import { CalendarCheck2, Folder, Settings, Banknote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../../../../public/logo-odonto.png';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';

export function SidebarDashboard({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);


  return (
    <div className='flex min-h-screen w-full'>

      <aside
        className={clsx("flex flex-col border-r bg-background transition-all duration-300 p-4 h-full", {
          "w-20": isCollapsed,
          "w-64": !isCollapsed,
          "hideen md:flex md:fixed": true
        })}
      >
        <div className='mb-6 mt-4'>
          {!isCollapsed && (
            <Image
              src={logoImage}
              alt="Logo OdontPRO"
              priority
              quality={100}
            />
          )}
        </div>
        <Button className='bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2'
          onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight className='w-12 h-12' /> : <ChevronLeft className='w-12 h-12' />}
        </Button>



        {/*Mostrar somente quando a sidebar estiver escondida*/}
        {isCollapsed && (
          <nav className='flex flex-col gap-1 overflow-hidden mt-2'>
            <SidebarLink
              href="/dashboard"
              label="Agendamentos"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<CalendarCheck2 className='w-6 h-6' />}
            />
            <SidebarLink
              href="/dashboard/services"
              label="Serviços"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<Folder className='w-6 h-6' />}
            />
            <SidebarLink
              href="/dashboard/profile"
              label="Meu Perfil"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<Settings className='w-6 h-6' />}
            />
            <SidebarLink
              href="/dashboard/plans"
              label="Planos"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<Banknote className='w-6 h-6' />}
            />
          </nav>
        )}

        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <nav className='flex flex-col gap-1 overflow-hidden'>
              <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                Painel
              </span>
              <SidebarLink
                href="/dashboard"
                label="Agendamentos"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<CalendarCheck2 className='w-6 h-6' />}
              />

              <SidebarLink
                href="/dashboard/services"
                label="Serviços"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<Folder className='w-6 h-6' />}
              />
              <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                Configurações
              </span>
              <SidebarLink
                href="/dashboard/profile"
                label="Meu Perfil"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<Settings className='w-6 h-6' />}
              />

              <SidebarLink
                href="/dashboard/plans"
                label="Planos"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<Banknote className='w-6 h-6' />}
              />

            </nav>
          </CollapsibleContent>
        </Collapsible>

      </aside>




      <div className={clsx("flex flex-1 flex-col transition-all durantion-300", {
        "md:ml-20": isCollapsed,
        "md:ml-64": !isCollapsed
      })}>

        <header className='md:hidden flex items-center justify-between border-b px-2 md:px-6 h-14 z-10 sticky top-0 bg-white'>
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsCollapsed(false)}
                >
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <h1 className="text-base md:text-lg font-semibold">
                Menu OdontPRO
              </h1>
            </div>

            <SheetContent side="right" className="sm:max-w-xs text-black">
              <SheetTitle>
                Menu OdontoPRO
              </SheetTitle>
              <SheetDescription>
                Menu Administrativo
              </SheetDescription>

              <nav className='grid gap-2 text-base pt-5'>
                <SidebarLink
                  href="/dashboard"
                  label="Agendamentos"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<CalendarCheck2 className='w-6 h-6' />}
                />
                <SidebarLink
                  href="/dashboard/services"
                  label="Serviços"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<Folder className='w-6 h-6' />}
                />
                <SidebarLink
                  href="/dashboard/profile"
                  label="Meu Perfil"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<Settings className='w-6 h-6' />}
                />
                <SidebarLink
                  href="/dashboard/plans"
                  label="Planos"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<Banknote className='w-6 h-6' />}
                />
              </nav>

            </SheetContent>
          </Sheet>

        </header>
        <main className='flex-1 py-4 px-2 md:p-6'>
          {children}
        </main>

      </div>

    </div >
  )
}

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  pathname: string;
  isCollapsed: boolean;
}

function SidebarLink({ href, label, icon, pathname, isCollapsed }:
  SidebarLinkProps) {
  return (
    <Link
      href={href}
    >
      <div
        className={clsx("flex items-center gap-2 px-3 py-2 rounded-md", {
          "bg-blue-500 text-white": pathname === href,
          "text-gray-700 hover:bg-gray-100": pathname !== href,
        })}>
        <span className='w-6 h-6'>{icon}</span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link >
  );
}
