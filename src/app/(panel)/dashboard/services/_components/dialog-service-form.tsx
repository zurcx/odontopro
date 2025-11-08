import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  name: z.string().min(3, { message: "O nome dever ter pelo menos 3 caracteres." }),
  price: z.string().min(1, { message: "O preço é obrigatório." }),
  hours: z.string(),
  minutes: z.string(),
})


export interface UseDiaLogServiceFormProps {
  initialValues?: {
    name: string;
    price: string;
    hours: string;
    minutes: string;
  }
}

export type DialogServiceFormData = z.infer<typeof formSchema>;

export function useDialogServiceForm() {
  return useForm<DialogServiceFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: '',
      hours: '',
      minutes: '',
    }
  })
}

