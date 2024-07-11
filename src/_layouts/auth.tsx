import { Outlet } from 'react-router-dom'

export const AuthLayout = () => (
  <div className="grid min-h-screen grid-cols-2">
    <h1>Auth</h1>

    <div>
      <Outlet />
    </div>
  </div>
)
