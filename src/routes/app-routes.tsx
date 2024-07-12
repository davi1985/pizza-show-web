import { RouteObject } from 'react-router-dom'

import { AppLayout } from '@/_layouts/app'
import { NotFound } from '@/pages/404'
import { Dashboard } from '@/pages/app/dashboard/dashboard'
import { Orders } from '@/pages/app/orders/orders'

export const appRoutes: RouteObject = {
  path: '/',
  element: <AppLayout />,
  errorElement: <NotFound />,
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
