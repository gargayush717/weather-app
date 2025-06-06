import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../redux/slice'

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
})