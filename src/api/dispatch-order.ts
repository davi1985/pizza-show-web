import { api } from '@/lib/axios'

type DispatchOrderRequest = {
  orderId: string
}

export const dispatchOrder = async ({ orderId }: DispatchOrderRequest) => {
  await api.patch(`/orders/${orderId}/dispatch`)
}
