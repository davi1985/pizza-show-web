import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const DayOrdersAmountCard = () => {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-x-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="dark:text-emerald-400 font-medium text-emerald-500">
                    +{dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem.
                </>
              ) : (
                <>
                  <span className="data:text-rose-400 font-medium text-rose-500">
                    -{dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem.
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
