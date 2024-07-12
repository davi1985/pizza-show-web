import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenue } from './month-revenue'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export const Dashboard = () => (
  <>
    <Helmet title="Dashboard" />

    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenue />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="gap4 grid grid-cols-9">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  </>
)
