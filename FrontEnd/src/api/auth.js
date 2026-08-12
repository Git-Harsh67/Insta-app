// const axios = require("axios")
import axios from "axios"
const baseURL = import.meta.env.VITE_AUTH_URL

export const login = async(userInfo)=>{
    const res = await axios.post(`${baseURL}/login`, userInfo )
    return res.data
}

export const signUp = async(userInfo)=>{
    const res = await axios.post(`${baseURL}/signUp`, userInfo )
    return res.data
}