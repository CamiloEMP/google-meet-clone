import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from '../../../supabase'

export const apiOrganization = createApi({
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
    getOrganization: builder.query({
      query: () => ({
        url: 'orgs/info',
        method: 'GET'
      })
    })
  })
})

export const { useGetOrganizationQuery } = apiOrganization
