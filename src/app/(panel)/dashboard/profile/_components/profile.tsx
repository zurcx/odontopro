"use client"

import { useState } from 'react'
import { ProfileFormData, useProfileForm } from './profile-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import imgTest from '../../../../../../public/foto1.png'
import { Label } from '@radix-ui/react-label'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Prisma } from '@prisma/client'
import { updateProfile } from '../_actions/update-profile'
import { toast } from 'sonner'
import { formatPhone, extractPhoneNumber } from '@/utils/format-phone'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'


type UserWithSubscription = Prisma.UserGetPayLoad<{
  include: {
    subscription: true
  }
}>


interface ProfileContentProps {
  user: UserWithSubscription;
}
export function ProfileContent({ user }: ProfileContentProps) {

  console.log(user);
  const router = useRouter()
  const [selectedHours, setSelectedHours] = useState<string[]>(user.times ?? [])
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const { update } = useSession();

  const form = useProfileForm({
    name: user.name,
    address: user.address,
    phone: user.phone,
    status: user.status,
    timeZone: user.timeZone
  });

  function generateTimeSlots(): string[] {
    const hours: string[] = [];

    for (let i = 8; i < 24; i++) {
      for (let j = 0; j < 2; j++) {
        const hour = i.toString().padStart(2, "0")
        const minute = (j * 30).toString().padStart(2, "0")
        hours.push(`${hour}:${minute}`)
      }
    }


    return hours;
  }

  const timeSlots = generateTimeSlots()

  console.log(timeSlots)

  function toggleHour(hour: string) {
    setSelectedHours((prev) => prev.includes(hour) ? prev.filter(h => h !== hour) : [...prev, hour].sort())
  }

  const timeZones = Intl.supportedValuesOf("timeZone").filter((zone) =>
    zone.startsWith("America/Sao_Paulo") ||
    zone.startsWith("America/Fortaleza") ||
    zone.startsWith("America/Recife") ||
    zone.startsWith("America/Bahia") ||
    zone.startsWith("America/Belem") ||
    zone.startsWith("America/Manaus") ||
    zone.startsWith("America/Cuiaba") ||
    zone.startsWith("America/Boa_Vista")
  );

  async function onSubmit(values: ProfileFormData) {

    const extractValue = extractPhoneNumber(values.phone || '')

    console.log(extractValue)

    const profileData = {
      ...values,
      times: selectedHours
    }
    console.log("Values: ", profileData)

    const response = await updateProfile({

      name: values.name,
      address: values.address,
      status: values.status === 'active' ? true : false,
      phone: values.phone,
      timeZone: values.timeZone,
      times: selectedHours || []
    })

    if (response.error) {
      toast(response.error, { closeButton: true })
      return;
    }
    toast(response.data)
  }

  async function handleLogout() {
    await signOut();
    await update();
    router.replace("/")

  }

  return (
    < div className='mx-auto'>
      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Meu Perfil</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex justify-center'>
                <div className='bg-gray-200 w-40 h-40 relative rounded-full overflow-hidden'>
                  <Image
                    src={imgTest}
                    alt="Picture of the author"
                    fill
                    className="rounded-cover"
                  />
                </div>
              </div>
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold'>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome Completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold'>Endereco Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o endereco completo ..." {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold'>Telefone</FormLabel>
                      <FormControl>
                        <
                          Input placeholder="(48) 99999-9999" {...field}
                          onChange={(e) => {
                            const formattedValue = formatPhone(e.target.value)
                            field.onChange(formattedValue)
                          }}
                        />

                      </FormControl>
                    </FormItem>
                  )}
                />


                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold'>Status da clinica</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value ? "active" : "inactive"}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select o status" {...field} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">ATIVO (clinica aberta)</SelectItem>
                            <SelectItem value="inactive">INATIVO (clinica fechada)</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className='space-y-2'>
                  <Label className='font-semibold'>Horarios de funcionamento</Label>


                  <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className='w-full justify-between'>Definir horarios
                        <ArrowRight className='w-5 h-5' />
                      </Button>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Horarios da clinica</DialogTitle>
                        <DialogDescription>
                          Selecione abaixo os horarios de funcionamento da clinica
                        </DialogDescription>
                      </DialogHeader>

                      <section className='space-y-4 mt-4'>
                        <p className='text-sm text-muted-foreground mb-2'>
                          Clique nos horarios abaixo para marcar ou desmarcar:
                        </p>

                        <div className='grid grid-cols-5 gap-2'>

                          {timeSlots.map((timeSlots) => (
                            <Button
                              key={timeSlots}
                              variant="outline"
                              className={cn('border-2', selectedHours.includes(timeSlots) && 'border-2 border-emerald-500 text-primary')}
                              onClick={() => toggleHour(timeSlots)}
                            >
                              {timeSlots}
                            </Button>
                          ))}
                        </div>
                      </section>
                      <Button className='w-full'
                        onClick={() => setDialogIsOpen(false)}
                      >
                        Fechar Modal
                      </Button>

                    </DialogContent>
                  </Dialog>

                </div>

                <FormField
                  control={form.control}
                  name="timeZone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold'>Selecione o fuso horario</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select o fuso o horaioo" {...field} />
                          </SelectTrigger>
                          <SelectContent>
                            {timeZones.map((zone) => (

                              <SelectItem key={zone} value={zone}>

                                {zone}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='w-full  bg-emerald-500 hover:bg-emerald-400'
                >Salvar</Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
      <section className='mt-4'>
        <Button
          variant="destructive"
          onClick={handleLogout}
        >
          Sair da conta
        </Button>
      </section>
    </div >
  )
}
