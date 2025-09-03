import { Button } from "@/components/ui/button";
import doctorImg from "../../../../public/doctor-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pb-4 sm:pb-0 pt-20 sm:px-6 lg:px-8">

        <main className="flex-[2] flex items-center justify-center">

          <article className="max-w-3xl space-y-8 flex flex-col justify-center">

            <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl">
              Encontre os melhores profissionais em um único lugar!
            </h1>
            <p className="text-base md:text-lg test-gray-600">
              OdontoPRO é a plataforma que conecta você aos melhores dentistas e clínicas odontológicas da sua região. Agende consultas,
              veja avaliações e encontre o profissional ideal para cuidar do seu sorriso.
            </p>
            <Button className="bg-green-500 text-white hover:bg-green-400 w-fit px-6 font-semibold">
              Encontre uma clinica
            </Button>
          </article>

          <div className="hidden lg:block">
            <Image
              src={doctorImg}
              alt="Dentista sorrindo"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  );
}
