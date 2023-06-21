import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import preloaderReducer from './slices/preloaderSlice'
import allReducer from './slices/allSlice'
import reviewReducer from './slices/reviewSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        allReducer,
        preloaderReducer,
        reviewReducer,
    }
})