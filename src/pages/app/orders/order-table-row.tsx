import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { cancelOrder } from '@/api/cancel-order'
import { GetOrdersResponse, Order } from '@/api/get-orders'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { currencyFormatter } from '@/utils/currencyFormatter'

import { OrderDetails } from './order-details'

type OrderTableRowProps = { order: Order }

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
  const [isDetailsOpen, setIdDetailsOpen] = useState(false)
  const queryClient = useQueryClient()

  const { mutateAsync: cancelOrderFn } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      const orderListCache = queryClient.getQueriesData<GetOrdersResponse>({
        queryKey: ['orders'],
      })

      orderListCache.forEach(([cachedKey, cacheData]) => {
        if (!cacheData) {
          return
        }

        queryClient.setQueryData<GetOrdersResponse>(cachedKey, {
          ...cacheData,
          orders: cacheData?.orders.map((item) => {
            if (item.orderId === orderId) {
              return { ...item, status: 'canceled' }
            }

            return order
          }),
        })
      })
    },
  })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIdDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails orderId={order.orderId} open={isDetailsOpen} />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>

      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell className="font-medium">{order.customerName}</TableCell>

      <TableCell className="font-medium">
        {currencyFormatter(order.total / 100)}
      </TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-3 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button
          variant="ghost"
          size="xs"
          disabled={!['pending', 'processing'].includes(order.status)}
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
        >
          <X className="mr-3 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
