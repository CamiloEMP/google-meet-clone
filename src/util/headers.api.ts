import { AxiosRequestHeaders } from 'axios'
import { supabase } from '../supabase'

export function headersApi(): AxiosRequestHeaders {
  let headers = {}
  const session = supabase.auth.session()
  const token = session?.access_token
  if (token) {
    headers = { authorization: `Bearer ${token}` }
  }
  return headers
}
