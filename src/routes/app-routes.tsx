import { RouteObject } from 'react-router-dom'

import { AppLayout } from '@/_layouts/app'
import { Dashboard } from '@/pages/app/dashboard/dashboard'
import { Orders } from '@/pages/app/orders/orders'

export const appRoutes: RouteObject = {
  path: '/',
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/orders',
      element: <Orders />,
    },
  ],
}
