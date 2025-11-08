import { redirect } from "next/navigation"
import getSesion from "@/lib/getSession"
import { ServiceContent } from "./_components/service-content"

export default async function Services() {


  const session = await getSesion()

  if (!session) {
    redirect("/")
  }

  return (
    <ServiceContent userId={session.user?.id!} />
  )
}
