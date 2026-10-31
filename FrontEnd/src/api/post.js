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

export const feedPosts = async () => {
    const res = await axios.get(`${baseURL}/feedPosts`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    return res.data.feedPosts
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

export const like = async (postId) => {
    const res = await axios.put(`${baseURL}/likePost/${postId}`,{}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}

export const unlike = async (postId) => {
    const res = await axios.put(`${baseURL}/unLikePost/${postId}`,{}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}

export const addComment = async (postId, data) => {
    try {
            const res = await axios.put(`${baseURL}/comment/${postId}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
    } catch (error) {
        console.error("Failed to add comment:", error.response?.data || error.message)
        throw error
    }

}

export const delComment = async (postId) => {
    const res = await axios.put(`${baseURL}/delComment/${postId}`,{}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return res.data
}