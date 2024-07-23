import { api } from '@/lib/axios'

type DeliverOrderRequest = {
  orderId: string
}

export const deliverOrder = async ({ orderId }: DeliverOrderRequest) => {
  await api.patch(`/orders/${orderId}/deliver`)
}
