import {configureStore} from '@reduxjs/toolkit'
import photoReducer from './services/photos'
import isAuthReducer from './services/isAuth'

export const store = configureStore({
  reducer: {
    photos: photoReducer,
    isAuth: isAuthReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

