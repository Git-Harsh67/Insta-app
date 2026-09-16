import axios from "axios"
const baseURL = import.meta.env.VITE_USER_URL

export const userProfile = async () => {
    const res = await axios.get(`${baseURL}/profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}

export const editProfile = async (changes) => {
    const res = await axios.patch(`${baseURL}/editProfile`, changes ,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}