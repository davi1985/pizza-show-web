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
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export type GetOrdersResponse = {
  orders: Order[]
  meta: Meta
}

export const getOrders = async ({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersParams) => {
  const { data } = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return data
}
