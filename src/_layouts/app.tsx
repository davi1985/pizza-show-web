import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div>
      <header>Header</header>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
