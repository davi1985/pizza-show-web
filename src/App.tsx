import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { routes } from './routes'

export const App = () => (
  <HelmetProvider>
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Helmet titleTemplate="%s | pizza-shop" />
      <Toaster richColors />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </HelmetProvider>
)
