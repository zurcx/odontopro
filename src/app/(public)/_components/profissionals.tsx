import fotoImg from '../../../../public/foto1.png';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";


export function Profissionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12">Clinicas disponiveis</h2>
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card>
            <CardContent className="p-0 rounded-md">
              <div>
                <div className="relative h-48">
                  <Image
                    src={fotoImg}
                    alt="Clinica A"
                    fill
                    className="object-cover rounded-t-md"

                  />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Clinica Centro
                    </h3>
                    <p className='text-sm text-gray-500'>Rua X, 123 Florianpolis - SC</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 "></div>
                </div>
                <Link
                  href="/clinica/1"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 text-center"
                >
                  Agendar consulta
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
