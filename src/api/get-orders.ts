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
  perPage: number
  totalCount: number
}

type GetOrdersParams = {
  pageIndex?: number | null
}

type GetOrdersResponse = {
  orders: Order[]
  meta: Meta
}

export const getOrders = async ({ pageIndex }: GetOrdersParams) => {
  const { data } = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return data
}
