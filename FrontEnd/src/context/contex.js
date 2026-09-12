import { createContext } from "react";
import { useState } from "react";

const homeContext = createContext()

const homeProvider = ({ children }) => {
    const [toHome, setToHome] = useState(true)
    const [toUser, setToUser] = useState(false)
    const [toPost, setToPost] = useState(false)
}