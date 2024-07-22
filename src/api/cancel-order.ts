import { api } from '@/lib/axios'

type CancelOrderRequest = {
  orderId: string
}

export const cancelOrder = async ({ orderId }: CancelOrderRequest) => {
  await api.patch(`/orders/${orderId}/cancel`)
}
