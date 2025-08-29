"use server"

import prisma from "@/lib/prisma"


export async function getAllServices({ userId }: { userId: string }) {
  if (!userId) {
    return {
      error: "Falha ao carregar serviços!"
    }
  }

  try {

    // console.log("AQUI VAMOS BUSCAR SEUS SERVICOS")

    const services = await prisma.service.findMany({

      where: {
        userId: userId,
        status: true
      }
    })

    return {
      data: services
    }
  } catch (error) {
    return {
      error: "Falha ao buscar os serviços!"
    }
  }
}
