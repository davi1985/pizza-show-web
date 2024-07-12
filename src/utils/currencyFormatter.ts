export const currencyFormatter = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
