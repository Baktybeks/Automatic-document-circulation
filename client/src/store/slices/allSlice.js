import {createSlice} from "@reduxjs/toolkit"

const allSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        userUploaded: [],
        product: {},
        categories: [],
        review: [],
        uploaded: []

    },
    reducers: {
        setUploaded: (state, action) => {
            state.uploaded = action.payload
        },
        setReview: (state, action) => {
            state.review = action.payload
        },
        setUserUploaded: (state, action) => {
            state.userUploaded = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        },

    }
})

export const {
    setUserUploaded,
    setUploaded,
    setProducts,
    setProduct,
    setReview,
    setCategories,
} = allSlice.actions

export default allSlice.reducer