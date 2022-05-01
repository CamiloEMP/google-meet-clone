import { configureStore } from '@reduxjs/toolkit'
import { apiOrganization } from './api/org'
import { apiVideo } from './api/video'

export const store = configureStore({
  reducer: {
    [apiOrganization.reducerPath]: apiOrganization.reducer,
    [apiVideo.reducerPath]: apiVideo.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      apiOrganization.middleware,
      apiVideo.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
