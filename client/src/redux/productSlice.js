import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: {
            allProducts: null,
            isFetching: false,
            error: false
        },
        msg: "",
    },
    reducers: {
        getProductsStart: (state) => {
            state.products.isFetching = true;
        },
        getProductsSuccess: (state, action) => {
            state.products.isFetching = false;
            state.products.allProducts = action.payload;
        },
        getProductsFailed: (state) => {
            state.products.isFetching = false;
            state.products.error = true;
        },
        deleteProductsStart: (state) => {
            state.products.isFetching = true;
        },
        deleteProductsSuccess: (state, action) => {
            state.products.isFetching = false;
            state.msg = action.payload;
            const index = state.products.allProducts.findIndex(product => product._id === action.payload.id);
            if (index !== -1) {
                state.products.allProducts.splice(index, 1);
            }
        },
        deleteProductsFailed: (state, action) => {
            state.productsisFetching = false;
            state.products.error = true;
            state.msg = action.payload;

        },
    }
})

export const {
    getProductsStart,
    getProductsSuccess,
    getProductsFailed,
    deleteProductsStart,
    deleteProductsSuccess,
    deleteProductsFailed
} = productSlice.actions

export default productSlice.reducer;