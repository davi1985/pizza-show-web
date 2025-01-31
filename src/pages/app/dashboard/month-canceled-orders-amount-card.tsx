import { useQuery } from '@tanstack/react-query'
import { TicketMinus } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export const MonthCanceledOrdersAmountCard = () => {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryKey: ['metrics', 'canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-x-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamento (mês)
        </CardTitle>
        <TicketMinus className="h4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="dark:text-emerald-400 font-medium text-emerald-500">
                    {monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado.
                </>
              ) : (
                <>
                  <span className="data:text-rose-400 font-medium text-rose-500">
                    +{monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado.
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
