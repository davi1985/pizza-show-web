import { api } from '@/lib/axios'

type GetDayOrdersAmountResponse = {
  amount: number
  diffFromYesterday: number
}

export const getDayOrdersAmount = async () => {
  const { data } = await api.get<GetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return data
}
