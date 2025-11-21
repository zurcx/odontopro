"use server"

import prisma from "@/lib/prisma"
import { error } from "console"
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, "O nome e obrigatorio"),
  email: z.string().email("O email e obrigatorio"),
  phone: z.string().min(1, "O telefone e obrigatorio"),
  date: z.date(),
  serviceId: z.string().min(1, "o servico e obrigatorio"),
  time: z.string().min(1, "O tempo e obrigatorio"),
  clinicId: z.string().min(1, "A clinica e obrigatorio"),
})


type FormSchema = z.infer<typeof formSchema>

export async function createNewAppointment(formData: FormSchema) {
  const schema = formSchema.safeParse(formData)

  if (!schema.success) {
    return {
      error: schema.error.issues[0].message
    }
  }

  try {
    const selectDate = new Date(formData.date)

    const year = selectDate.getFullYear();
    const month = selectDate.getMonth();
    const day = selectDate.getDate();

    const appointmentDate = new Date(year, month, day, 0, 0, 0, 0)

    const newAppointment = await prisma.appointment.create({
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        time: formData.time,
        appointmentDate: appointmentDate,
        serviceId: formData.serviceId,
        userId: formData.clinicId,
      }
    })

  } catch (err) {
    console.log(err);
    return {
      error: "Erro ao cadastrar agendamento"
    }
  }



}
