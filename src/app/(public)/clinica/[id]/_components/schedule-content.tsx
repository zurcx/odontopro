"use client";

import Image from "next/image";
import imgTest from "../../../../../../public/foto1.png";
import { LucideMapPin } from "lucide-react";
import { Prisma } from "@prisma/client";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useAppointmentForm } from "./schedule-form";
import { formatPhone } from '@/utils/formatPhone'
import { DateTimePicker } from "./date-picker";

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

  const form = useAppointmentForm();

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
            <h1 className="text-2xl font-bold mb-2">{clinic.name}</h1>
            <div className="flex items-center gap-1 mb-8">
              <LucideMapPin className="w-5 h-5" />
              <span>{clinic.address ? clinic.address : "Endereco nao informado!"}</span>
            </div>

          </article>
        </div>
      </section>

      <section className="max-w-2xl mx-auto w-full mt-6">
        <Form {...form}>
          <form
            className="mx-8 space-y-12 bg-white p-6 border rounded-md shadow-sm"
          >

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Nome Completo:</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      placeholder="Digite seu nome completo..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />



            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">E-mail:</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="Digite seu email..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />



            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Telefone:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="phone"
                      placeholder="(12) 34567-8901"
                      onChange={(e) => {
                        const formatedValue = formatPhone(e.target.value)
                        field.onChange(formatedValue)
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-1">
                  <FormLabel className="font-semibold">Telefone:</FormLabel>
                  <FormControl>
                    <DateTimePicker
                      initialDate={new Date()}
                      className="w-full rounded=full border p-2"
                      onChange={(date) => {
                        if (date) {
                          field.onChange(date)
                        }
                      }}
                    />

                  </FormControl>
                </FormItem>
              )}
            />




          </form>
        </Form>
      </section>




    </div>
  );
}
