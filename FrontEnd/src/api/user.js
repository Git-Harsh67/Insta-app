import axios from "axios"
const baseURL = import.meta.env.VITE_USER_URL

export const userProfile = async (userDetails) => {
    const res = await axios.get(`${baseURL}/profile`, userDetails, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}
