import { headersApi } from '../../util/headers.api'
import axios from 'axios'

interface Param {
  name: string
  idOrg?: string
}

interface ReturnData {
  roomName: string
  uid: string
}

export function videoCreateRoom(data: Param) {
  const headers = headersApi()
  return axios.request<ReturnData>({
    method: 'POST',
    url: '/video/create',
    data,
    headers
  })
}
