"use client"

import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { DialogServiceFormData, useDialogServiceForm } from "./dialog-service-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DialogService() {

  const form = useDialogServiceForm()

  async function onSubmit(values: DialogServiceFormData) {
    console.log(values)
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Novo Serviço</DialogTitle>
        <DialogDescription>
          Adicione um nove serviço
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-2"

          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel>
                    Nome do Serviço
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome do serviço"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>

      </Form>

      <Form {...form}>
        <form className="space-y-2">
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel>
                    Valor do Serviço
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex.: 100.00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <p className="font-semibold">Tempo de Duração do Serviço:</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel>
                    Horas
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1"
                      {...field}
                      min="0"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minutes"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel>
                    Minutos
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0"
                      {...field}
                      min="0"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full font-semibold text-white">
            Adicionar Serviço
          </Button>
        </form>
      </Form>

    </>
  )
}
