import { api } from '@/lib/axios'

import { OrderStatus } from './get-orders'

type GetOrderDetailsRequest = {
  orderId: string
}

type GetOrderDetailsResponse = {
  id: string
  createdAt: string
  status: OrderStatus
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export const getOrderDetails = async ({ orderId }: GetOrderDetailsRequest) => {
  const { data } = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return data
}
