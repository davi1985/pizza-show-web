import { api } from '@/lib/axios'

type GetRevenueOrdersAmountResponse = {
  receipt: number
  diffFromLastMonth: number
}

export const getRevenueOrdersAmount = async () => {
  const { data } = await api.get<GetRevenueOrdersAmountResponse>(
    '/metrics/month-receipt',
  )

  return data
}
