type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

type OrderStatusProps = {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, { label: string; color: string }> = {
  pending: { label: 'Pendente', color: 'bg-yellow-400' },
  canceled: { label: 'Cancelado', color: 'bg-rose-500' },
  delivered: { label: 'Entregue', color: 'bg-emerald-500' },
  delivering: { label: 'Em entrega', color: 'bg-amber-500' },
  processing: { label: 'Em preparo', color: 'bg-amber-500' },
}
export const OrderStatus = ({ status }: OrderStatusProps) => {
  const { label, color } = orderStatusMap[status]

  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="font-medium text-muted-foreground">{label}</span>
    </div>
  )
}
