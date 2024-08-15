import { RouteObject } from 'react-router-dom'

import { AuthLayout } from '@/_layouts/auth'
import { NotFound } from '@/pages/404'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'
import { Error } from '@/pages/error'

export const signinRoutes: RouteObject = {
  path: '/',
  element: <AuthLayout />,
  errorElement: <Error />,
  children: [
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    { path: '*', element: <NotFound /> },
  ],
}
