import { createSlice } from "@reduxjs/toolkit" ;

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState : {
        products : [], // array of wishlist products
        quantity : 0   // total number of wishlist products
    },
    // action attributes : type, payload
    // state is the current state
    reducers : {
        addWishlistProduct : (state, action) => {
            state.quantity += action.payload.quantity ;
            state.products.push(action.payload) ;
        },
        removeWishlistProduct : (state, action) => {
            state.quantity -= action.payload.quantity ;
            state.products.splice(state.products.indexOf(action.paylaod) , 1) ;
        }
    }
}) ;

export const { addWishlistProduct , removeWishlistProduct } = wishlistSlice.actions ;
export default wishlistSlice.reducer ;