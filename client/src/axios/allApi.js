import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {
    setCategories,
    setProduct,
    setReview, setUploaded,
    setUserUploaded,
} from "../store/slices/allSlice"
import {preloader} from "../store/slices/preloaderSlice"

// GET

export const getUploadedApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/uploaded/`)
            dispatch(setUploaded(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getUserUploadedApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_uploaded/user/${id}`)
            dispatch(setUserUploaded)
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}


export const getCategoriesApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/category/`)
            dispatch(setCategories(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getProductApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/product/${id}`)
            dispatch(setProduct(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}


// POST

export const addUploadedApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/uploaded/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addUserUploadedApi = (userId, uploadedId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/user_uploaded/', {userId, uploadedId})
            if (data.status === 200) {
                alert('Вы успешно добавили')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getReviewApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/review/`)
            dispatch(setReview(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addReviewApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/review/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили отзыв')
            }
        } catch (e) {
            alert(e)
        }
    }
}

