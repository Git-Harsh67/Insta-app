// const axios = require("axios")
import axios from "axios"
const baseURL = "http://localhost:3000/api/auth"

export const login = async(userInfo)=>{
    const res = await axios.post(`${baseURL}/login`, userInfo )
    return res.data
}