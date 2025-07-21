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
import Image from "next/image";

export function Profissionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12">Clinicas disponiveis</h2>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <div>
                <div className="relative h-48">
                  <Image
                    src={fotoImg}
                    alt="Clinica A"
                    className="object-contain"
                    fill
                  />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3>
                    Clinica Centro
                  </h3>
                  <p>Rua X, 123 Florianpolis - SC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>


  )
}
