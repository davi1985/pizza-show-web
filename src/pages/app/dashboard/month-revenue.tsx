import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { currencyFormatter } from '@/utils/currencyFormatter'

export const MonthRevenue = () => (
  <Card>
    <CardHeader className="flex-row items-center justify-between space-x-0 pb-2">
      <CardTitle className="text-base font-semibold">
        Receita total (mês)
      </CardTitle>
      <DollarSign className="h4 w-4 text-muted-foreground" />
    </CardHeader>

    <CardContent className="space-y-1">
      <span className="text-2xl font-bold tracking-tight">
        {currencyFormatter(1230.8)}
      </span>
      <p className="text-xs text-muted-foreground">
        <span className="data:text-emerald-400 font-medium text-emerald-500">
          +2%
        </span>{' '}
        em relação ao mês passado.
      </p>
    </CardContent>
  </Card>
)
