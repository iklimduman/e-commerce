import { ReviewsSharp } from "@mui/icons-material";
import { createSlice, current } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0, // how many items in the cart
        total: 0, // total price
    },
    reducers: {
        addProduct: (state, action) => {
            console.log(state.products[0]._id);
            console.log(action.payload._id);

            // chech if this product added before
            if (state.products.length !== 0) {
                let prevAddedProd = undefined ;
                prevAddedProd = state.products.find(
                    (product) => product._id == action.payload._id);
                console.log(prevAddedProd);
                if (prevAddedProd !== undefined) {
                    prevAddedProd.quantity += action.payload.quantity;
                    state.total += action.payload.price * action.payload.quantity;
                }
                else {
                    state.products.push(action.payload);
                    state.quantity += action.payload.quantity;
                    state.total += action.payload.price * action.payload.quantity;
                }
            }
            else {
                state.products.push(action.payload);
                state.quantity += action.payload.quantity;
                state.total += action.payload.price * action.payload.quantity;
            }

            console.log((current(state)));
        },
        removeProduct: (state, action) => {
            if (action.payload.productid == undefined) {
                state.products.map((product) => console.log(product._id));
                state.products.map((product) => {
                    if (product._id == undefined) {
                        state.products.splice(state.products.indexOf(action.paylaod), 1);
                    }
                })
            }
            else {
                let prevAddedProd = null;
                prevAddedProd = state.products.find((product) => product._id == action.payload._id);
                if (prevAddedProd != null) {
                    prevAddedProd.quantity -= action.payload.quantity;
                    state.total -= action.payload.quantity * action.payload.price;
                }
                else {
                    state.products.splice(state.products.indexOf(action.paylaod), 1);
                    state.quantity -= action.payload.quantity;
                    state.total -= action.payload.quantity * action.payload.price;
                }
            }
            console.log((current(state)));
        },
        resetChart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const { addProduct, removeProduct, resetChart } = cartSlice.actions;
export default cartSlice.reducer;