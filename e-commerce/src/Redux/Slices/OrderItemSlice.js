import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import FetchProduct from '../../Services/FetchProduct'



export const fetchProducts = createAsyncThunk(
    'orderItem/fetchProducts',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products; // sirf products array
    }
);

const initialState = {
    OrderPro: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null
};


export const OrderItemSlice = createSlice({
    name: "OrderItem",
    initialState,
    reducers: {
        addCart: (state, action) => {
            // Add product to cart (example)
            state.OrderPro.push(action.payload)
        }
    }

})

export const { addCart } = OrderItemSlice.actions

export default OrderItemSlice.reducer