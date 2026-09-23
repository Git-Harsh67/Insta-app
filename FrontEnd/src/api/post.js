import axios from "axios"
const baseURL = import.meta.env.VITE_POST_URL

export const createPost = async (postDis) => {
    const res = await axios.post(`${baseURL}/createPost`, postDis,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    return res.data
}

export const allPost = async () => {
    const res = await axios.get(`${baseURL}/allPost`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    return res.data.allPosts
}

export const myPost = async () => {
    const res = await axios.get(`${baseURL}/myPost`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}

export const delPost = async (postId) => {
    const res = await axios.delete(`${baseURL}/delPost/${postId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}