"use client";

import Image from "next/image";
import imgTest from "../../../../../../public/foto1.png";
import { LucideMapPin } from "lucide-react";
import { Prisma } from "@prisma/client";

type UserWithServiceAndSubsript = Prisma.UserGetPayLoad<{
  include: {
    subscription: true,
    services: true,
  }
}>

interface ScheduleContentProps {
  clinic: UserWithServiceAndSubsript
}

export function ScheduleContent({ clinic }: ScheduleContentProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-32 bg-emerald-500" />
      <section className="container mx-auto px-4 -mt-16">
        <div className="max-w-2xl mx-auto">
          <article className="flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-8">
              <Image
                src={clinic.image ? clinic.image : imgTest}
                alt="Foto da clinica"
                className="object-cover"
                fill
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Clinica Teste</h1>
            <div className="flex items-center gap-1">
              <LucideMapPin className="w-5 h-5" />
              <span>Endereco nao informado</span>
            </div>

          </article>
        </div>
      </section>




    </div>
  );
}
