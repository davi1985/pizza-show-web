import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getRevenueOrdersAmount } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { currencyFormatter } from '@/utils/currencyFormatter'

export const MonthRevenue = () => {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'revenue-orders-amount'],
    queryFn: getRevenueOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-x-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {currencyFormatter(monthRevenue.receipt / 100)}
            </span>

            <p className="text-xs text-muted-foreground">
              {monthRevenue?.diffFromLastMonth >= 0 ? (
                <>
                  <span className="dark:text-emerald-400 font-medium text-emerald-500">
                    +{monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado.
                </>
              ) : (
                <>
                  <span className="data:text-rose-400 font-medium text-rose-500">
                    {monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado.
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
