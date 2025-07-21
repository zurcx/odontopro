import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from '../../../../public/doctor-hero.png';

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="flex-[2] max-w-5xl space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tight">Encontre os melhores profissionais em um unico lugar!</h1>
            <p className="text-base lg:text-lg text-gray-600">
              Descubra uma plataforma inovadora que conecta você aos melhores profissionais de diversas áreas. Seja para serviços domésticos, consultoria, design ou tecnologia, temos o especialista certo para atender às suas necessidades. Navegue por perfis verificados, leia avaliações de clientes e solicite orçamentos personalizados. Tudo isso com a conveniência de um clique! Junte-se a nós e transforme a maneira como você contrata serviços profissionais.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-white w-fit">
              Encontre um clinica
            </Button>

          </article>

          <div className="hidden lg:block">
            <Image
              src={doctorImg}
              alt="Imagem ilustrativa de um profissional de saúde"
              width={340}
              height={400}
              className="object-contain "
              quality={100}
              priority

            />
          </div>

        </main>
      </div>
    </section>
  )
}
