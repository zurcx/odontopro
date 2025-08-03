import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import fotoImg from "../../../../public/foto1.png"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clínicas Disponíveis
        </h2>
        <section
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div>
                <div className="relative h-50">
                  <Image
                    src={fotoImg}
                    alt="Foto do profissional"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clínica Centro</h3>
                    <p className="text-gray-500">Rua X, Centro, Florianópolis</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                </div>
                <Link href="/clinica/123"
                  className="w-full bg-emerald-500 text-white hover:bg-emerald-400 text_white flex items-center justify-center py-4 rounded-md text-sm md:text-base font-medium"
                >
                  Agendar Horário
                  <ArrowRight className="ml-2 h-4 w-4" />

                </Link>
              </div>
            </CardContent>
          </Card>





        </section>
      </div >
    </section >
  )
}

