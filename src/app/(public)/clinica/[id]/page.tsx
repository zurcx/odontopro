import { redirect } from "next/navigation"
import { getInfoSchedule } from "./_data-access/get-into-schedule"

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const userId = (await params).id
  const user = await getInfoSchedule({ userId: userId })

  if (!user) {
    redirect("/")
  }

  console.log(user)
  return (
    <h1>TESTE {userId}</h1>
  )
}
