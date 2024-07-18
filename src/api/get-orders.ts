import { api } from '@/lib/axios'

export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export type Order = {
  orderId: string
  createdAt: string
  status: OrderStatus
  customerName: string
  total: number
}

type Meta = {
  pageIndex: number
  perPager: number
  totalCount: number
}

type GetOrdersResponse = {
  orders: Order[]
  meta: Meta
}

export const getOrders = async () => {
  const { data } = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return data
}
