import { RouteObject } from 'react-router-dom'

import { AppLayout } from '@/_layouts/app'
import { Dashboard } from '@/pages/app/dashboard'

export const appRoutes: RouteObject = {
  path: '/',
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />,
    },
  ],
}
