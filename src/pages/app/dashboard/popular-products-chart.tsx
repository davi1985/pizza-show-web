import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { PopularProductsLabelChart } from './popular-products-label-chart'

const data = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarela', amount: 30 },
  { product: 'Carne de Sol', amount: 20 },
  { product: 'Quatro queijos', amount: 41 },
  { product: 'Mista', amount: 22 },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export const PopularProductsChart = () => (
  <Card className="col-span-3">
    <CardHeader className="pb-8">
      <div className="flex items-center justify-between">
        <CardTitle className="text-base font-medium">
          Produtos populares
        </CardTitle>

        <BarChart className="h-4 w-4 text-muted-foreground" />
      </div>
    </CardHeader>

    <CardContent>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart style={{ fontSize: 12 }}>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="product"
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={86}
            innerRadius={64}
            strokeWidth={8}
            label={(props) => (
              <PopularProductsLabelChart data={data} {...props} />
            )}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                className="stroke-background hover:opacity-80"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)
