import { headersApi } from '../../util/headers.api'
import axios from 'axios'

interface Param {
  id: string
}

interface ReturnData {
  token: string
}

export function videoAccessRoom({ id }: Param) {
  const headers = headersApi()
  return axios.request<ReturnData>({
    method: 'GET',
    url: `/video/access?id=${id}`,
    headers
  })
}
