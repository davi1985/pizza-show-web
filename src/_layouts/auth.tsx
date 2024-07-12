import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => (
  <div className="grid min-h-screen grid-cols-2 antialiased">
    <div className="bg-foregroundImage flex h-full flex-col justify-between border-r border-foreground/5 bg-muted bg-cover bg-fixed bg-center bg-no-repeat p-10 text-muted-foreground">
      <div className="flex items-center gap-3 text-lg text-foreground">
        <Pizza className="h-5 w-5 text-white" />

        <span className="font-semibold text-white">pizza.shop</span>
      </div>

      <footer className="text-sm text-white">
        Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
      </footer>
    </div>

    <div className="relative flex flex-col items-center justify-center">
      <Outlet />
    </div>
  </div>
)
