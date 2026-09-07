import axios from "axios"
const baseURL = import.meta.env.VITE_POST_URL

export const createPost = async(postDis)=>{
    const res = await axios.post(`${baseURL}/createPost`, postDis )
    return res.data
}