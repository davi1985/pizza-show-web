import { createBrowserRouter } from 'react-router-dom'

import { appRoutes } from './app-routes'
import { signinRoutes } from './sign-in-routes'

export const routes = createBrowserRouter([appRoutes, signinRoutes])
