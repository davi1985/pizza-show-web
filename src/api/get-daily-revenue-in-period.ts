import { api } from '@/lib/axios'

type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export const getDailyRevenueInPeriod = async () => {
  const { data } = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
  )

  return data
}
