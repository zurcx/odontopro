"user serve"
import prisma from "@/lib/prisma"

interface GetUserDataProps {
  userId: string;
}
export async function getUserData({ userId }: GetUserDataProps) {
  try {

    if (!userId) {
      return null
    }
    const user = await prisma.user?.findFirst({
      where: {
        id: userId
      },
      include: {
        subscription: true,
      }
    })
    if (!user) {
      return null
    }

    console.log(user)
    return user

  } catch (err) {
    console.log(err)
    return null
  }
}
