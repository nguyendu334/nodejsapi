import axios from "axios"
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice"
import { deleteProductsFailed, deleteProductsStart, deleteProductsSuccess, getProductsFailed, getProductsStart, getProductsSuccess } from "./productSlice";
import { deleteUsersFailed, deleteUsersStart, deleteUsersSuccess, getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("/login", user);
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (err) {
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        const res = await axios.post("/register", user);
        dispatch(registerSuccess(res.data))
        navigate("/login")
    } catch (err) {
        dispatch(registerFailed())
    }
}

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUsersStart())
    try {
        const res = await axiosJWT.get("/user", {
            headers: { token: `key ${accessToken}` }
        });
        dispatch(getUsersSuccess(res.data))
    } catch (err) {
        dispatch(getUsersFailed())
    }
}

export const deleteUsers = async (accessToken, dispatch, id, axiosJWT) => {
    dispatch(deleteUsersStart())
    try {
        const res = await axiosJWT.delete("/user/" + id, {
            headers: { token: `key ${accessToken}` }
        });
        dispatch(deleteUsersSuccess({results:res.data, id}))
    } catch (err) {
        dispatch(deleteUsersFailed(err.response.data))
    }
}


export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logoutStart())
    try {
        const res = await axiosJWT.post("/logout", id, {
            headers: { token: `key ${accessToken}` }
        });
        dispatch(logoutSuccess(res.data))
        navigate("/login")
    } catch (err) {
        dispatch(logoutFailed())
    }
}  


export const getAllProducts = async (dispatch, axiosJWT) => {
    dispatch(getProductsStart())
    try {
        const res = await axiosJWT.get("/product");
        dispatch(getProductsSuccess(res.data))
    } catch (err) {
        dispatch(getProductsFailed())
    }
}

export const deleteProducts = async (accessToken, dispatch, id, axiosJWT) => {
    dispatch(deleteProductsStart())
    try {
        const res = await axiosJWT.delete("/product/" + id + "/force", {
            headers: { token: `key ${accessToken}` }
        });
        dispatch(deleteProductsSuccess({results: res.data, id}))

    } catch (err) {
        dispatch(deleteProductsFailed(err.response.data))
    }
}