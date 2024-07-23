import { api } from '@/lib/axios'

type GetMonthOrdersAmountResponse = {
  amount: number
  diffFromLastMonth: number
}

export const getMonthOrdersAmount = async () => {
  const { data } = await api.get<GetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return data
}
