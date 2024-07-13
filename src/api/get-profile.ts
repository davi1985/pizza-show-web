import { api } from '@/lib/axios'

type GetProfileResponse = {
  id: string
  name: string
  email: string
  phone: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export const getProfile = async () => {
  const { data } = await api.get<GetProfileResponse>('/me')

  return data
}
