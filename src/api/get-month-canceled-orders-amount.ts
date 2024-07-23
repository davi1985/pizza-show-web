import { api } from '@/lib/axios'

type GetMonthCanceledOrdersAmountResponse = {
  amount: number
  diffFromLastMonth: number
}

export const getMonthCanceledOrdersAmount = async () => {
  const { data } = await api.get<GetMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return data
}
