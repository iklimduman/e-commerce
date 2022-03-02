import { createSlice } from "@reduxjs/toolkit" ;

const cartSlice = createSlice({
    name : "cart" ,
    initialState : {
        products : [],
        quantity : 0 , // how many items in the cart
        total : 0 , // total price
    },
    reducers : {
        addProduct : (state,action)=>{
            state.quantity += 1 ;
            state.products.push(action.payload.product) ;
            state.total += action.payload.price ;
        }
    }
}) ;

export const { addProduct } = cartSlice.actions ;
export default cartSlice.reducer ;