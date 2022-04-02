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
            state.quantity += action.payload.quantity ;
            state.products.push(action.payload) ;
            state.total += action.payload.price * action.payload.quantity;
            console.log("success") ;
        },
        removeProduct : (state, action) => {
            state.quantity -= action.payload.quantity ;
            state.products.splice(state.products.indexOf(action.paylaod) , 1) ;
            state.total -= action.payload.price * action.payload.quantity
        }
    }
}) ;

export const { addProduct, removeProduct } = cartSlice.actions ;
export default cartSlice.reducer ;