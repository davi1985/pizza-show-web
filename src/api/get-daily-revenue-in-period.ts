import { api } from '@/lib/axios'

type GetDailyRevenueInPeriodRequest = {
  from?: Date
  to?: Date
}

type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export const getDailyRevenueInPeriod = async ({
  from,
  to,
}: GetDailyRevenueInPeriodRequest) => {
  const { data } = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return data
}
