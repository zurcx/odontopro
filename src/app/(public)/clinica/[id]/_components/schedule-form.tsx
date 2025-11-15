"use client"

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const appointmentSchema = z.object({
  name: z.string().min(1, "O nome e obrigatorio"),
  email: z.string().email("O email e obrigatorio"),
  phone: z.string().min(1, "O telefone e obrigatorio"),
  date: z.date(),
  serviceId: z.string().min(1, "O servico e obrigatorio")
})

export type AppointmentFormData = z.infer<typeof appointmentSchema>

export function useAppointmentForm() {
  return useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceId: "",
      date: new Date(),
    }
  })
}

