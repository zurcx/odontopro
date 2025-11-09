import { getAllServices } from "../data-access/get-all-services";
import { ServicesList } from "./services-list";

interface ServicesContentProps {
  userId: string;
}


export async function ServiceContent({ userId }: ServicesContentProps) {

  const services = await getAllServices({ userId: userId })

  console.log(services)

  return (
    <ServicesList services={services.data || []} />
  )
}
