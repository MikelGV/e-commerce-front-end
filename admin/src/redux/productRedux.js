import {createSlice} from "@reduxjs/toolkit";

export const prodcutSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET ALL
        getProductStart:(state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess:(state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure:(state) => {
            state.isFetching = false;
            state.error = true;
        },
        // Delete ALL
        deleteProductStart:(state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess:(state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item)=>item._id === action.payload.id), 1
            );
        },
        deleteProductFailure:(state) => {
            state.isFetching = false;
            state.error = true;
        }
    },
});

export const {
    getProductStart, 
    getProductSuccess, 
    getProductFailure, 
    deleteProductFailure, 
    deleteProductStart, 
    deleteProductSuccess} = prodcutSlice.actions;

export default prodcutSlice.reducer;