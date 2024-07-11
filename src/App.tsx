import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { routes } from './routes'

export const App = () => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | pizza-shop" />
    <RouterProvider router={routes} />
  </HelmetProvider>
)
