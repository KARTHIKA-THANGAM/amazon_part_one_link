import { configureStore } from '@reduxjs/toolkit'
import farmerReducer from '../redux/farmerSlice'
export const store = configureStore({
  reducer: {farmerReducer},
})