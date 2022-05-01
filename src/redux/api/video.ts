import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from '../../supabase'
import { videoCrateRoom, videoRoom } from '../types/video'

export const apiVideo = createApi({
  reducerPath: 'apiVideo',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: headers => {
      const session = supabase.auth.session()
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = session?.access_token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: builder => ({
    createRoom: builder.query<videoCrateRoom, videoRoom>({
      query: body => ({
        url: 'video/create',
        method: 'POST',
        body
      })
    })
  })
})

export const { useCreateRoomQuery } = apiVideo
