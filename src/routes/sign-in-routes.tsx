import { RouteObject } from 'react-router-dom'

import { AuthLayout } from '@/_layouts/auth'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'

export const signinRoutes: RouteObject = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
  ],
}
