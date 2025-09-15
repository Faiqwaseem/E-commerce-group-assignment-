import { configureStore } from '@reduxjs/toolkit'
import  OrderItemSlice  from '../Redux/Slices/OrderItemSlice'
export default configureStore({
  reducer: {
     OrderItem: OrderItemSlice
  }
})