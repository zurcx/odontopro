"use client"
import { useState } from 'react'
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { DialogServiceFormData, useDialogServiceForm } from "./dialog-service-form"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { convertRealToCents } from "@/utils/convertCurrency"
import { createNewService } from "../_actions/create-service"
import { toast } from "sonner"

interface DiaLogServiceProps {
  closeModal: () => void;
}

export function DialogService({ closeModal }: DiaLogServiceProps) {
  const form = useDialogServiceForm()
  const [loading, setLoading] = useState(false)

  async function onSubmit(values: DialogServiceFormData) {
    setLoading(true)
    const priceInCents = convertRealToCents(values.price)
    const hours = parseInt(values.hours) || 0;
    const minutes = parseInt(values.minutes) || 0;

    const durationInMinutes = (hours * 60) + minutes;

    const response = await createNewService({
      name: values.name,
      price: priceInCents,
      duration: durationInMinutes,
    })

    setLoading(false)

    if (response?.error) {
      toast.error(response.error)
      return;

    }

    toast.success("Serviço criado com sucesso!")
    form.reset();
    handleCloseModal();


  }

  function handleCloseModal() {
    closeModal();
  }

  function changeCurrency(event: React.ChangeEvent<HTMLInputElement>) {
    let { value } = event.target
    value = value.replace(/\D/g, '')

    if (value) {
      value = (parseInt(value) / 100).toFixed(2);
      value = value.replace('.', ',');
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    }

    event.target.value = value
    form.setValue('price', value)

  }
  return (
    <>

      <DialogHeader>
        <DialogTitle>Adicionar Serviço</DialogTitle>
        <DialogDescription>
          Adicione um novo serviço para oferecer aos seus clientes.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          className="space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >

          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Nome do Serviço:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o nome do Serviço" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Valor do Serviço:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field} placeholder="Ex: 120,00"
                      onChange={changeCurrency}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <p className="font-semibold">Tempo de Duracao do Servico</p>
          <div className="grid grid-cols-2 gap-3">

            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Horas:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="1"
                      min={0}
                      type="number"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minutes"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Minutos:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="0"
                      min={0}
                      type="number"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="mt-4 w-full"
            disabled={loading}
          >
            {loading ? "Cadastrando" : "Adicionar Servico"}
          </Button>
        </form>
      </Form>
    </>
  )
}
