import { api } from '@/lib/axios'

export type SignInRequest = {
  email: string
}

export const signIn = async ({ email }: SignInRequest) =>
  await api.post('/authenticate', { email })
