import { configureStore } from '@reduxjs/toolkit'
import { apiOrganization } from './api/org'

export const store = configureStore({
  reducer: {
    [apiOrganization.reducerPath]: apiOrganization.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiOrganization.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
