import { RouteObject } from 'react-router-dom'

import { AuthLayout } from '@/_layouts/auth'
import { SignIn } from '@/pages/auth/sign-in'

export const signinRoutes: RouteObject = {
  path: '/sign-in',
  element: <AuthLayout />,
  children: [
    {
      path: '/sign-in',
      element: <SignIn />,
    },
  ],
}
