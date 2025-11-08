import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../public/doctor-hero.png"

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="flex-[2] max-w-3xl space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold max-2xl tracking-tight">
              Encontre os melhores profissionais em um unico local
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Nos somos uma plataforma para profissionais da saude com foxo em
              agilizar seu atendimento de forma simplificada e organizada.
            </p>

            <Button className="bg-emerald-500 hover:accent-emerald-400 w-fit px-6 font-semibold">
              Encontre uma clinica
            </Button>
          </article>
          <div className="hidden sm:block">
            <Image
              src={doctorImg}
              alt="Foto ilustrativa"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            >
            </Image>
          </div>
        </main>
      </div>
    </section>
  )
}
