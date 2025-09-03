export function formatPhone(value: string) {
  // remover caracteres não numéricos
  const cleanedValue = value.replace(/\D/g, '')

  // limitar a 11 caracteres
  if (cleanedValue.length > 11) {
    return value.slice(0, 15)
  }
  // aplicar a marcar
  const formattedValue = cleanedValue
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2')
  return formattedValue
}

export function extractPhoneNumber(phone: string) {
  const phoneValue = phone.replace(/[\(\)\s-]/g, "")
  return phoneValue
}
