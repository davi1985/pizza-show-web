import { api } from '@/lib/axios'

export type RegisterRestaurantRequest = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export const registerRestaurant = async ({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantRequest) =>
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
