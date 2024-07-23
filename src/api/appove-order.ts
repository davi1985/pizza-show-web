import { api } from '@/lib/axios'

type ApproveOrderRequest = {
  orderId: string
}

export const approveOrder = async ({ orderId }: ApproveOrderRequest) => {
  await api.patch(`/orders/${orderId}/approve`)
}
