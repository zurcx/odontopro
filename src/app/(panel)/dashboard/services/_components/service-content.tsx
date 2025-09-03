import { getAllServices } from "../_actions/get-all-services";
import { ServicesList } from "./service-list";

interface ServicesContentProps {
  userId: string;
}
export async function ServicesContent({ userId }: ServicesContentProps) {

  const services = await getAllServices({ userId: userId })
  console.log(services)
  return (
    <ServicesList />
  )

}
