
import getSesion from '@/lib/getSession'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { getUserData } from './_data-access/get-info-user'
import { ProfileContent } from './_components/profile'

export default async function Profile() {
  const session = await getSesion()

  if (!session) {
    redirect("/")
  }

  const user = await getUserData({ userId: session.user?.id })
  //  console.log("getUserData :", user)

  if (!session) {
    redirect("/")
  }

  return (
    <ProfileContent></ProfileContent>
  )
}
