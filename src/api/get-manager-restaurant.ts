import { api } from '@/lib/axios'

export type GetManagerRestaurantResponse = {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const getManagerRestaurant = async () => {
  const { data } = await api.get<GetManagerRestaurantResponse>(
    '/managed-restaurant',
  )

  return data
}
