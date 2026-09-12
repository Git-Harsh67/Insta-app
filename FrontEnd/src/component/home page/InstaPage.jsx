import Nav from "./Nav";
import Home from "./Home";
import UserPage from "./UserPage";
import { createContext, useState } from "react";
import Post from "./Post";

const InstaPage = (props) => {
  const[toHome, setToHome]=useState(true)
  const[toUser, setToUser]=useState(false)
  const[toPost, setToPost]=useState(false)
  return (
    <main className="flex bg-gray-950 gap-x-12 ">
      <div className="bg-gray-950 h-dvh fixed">
        <Nav setToUser={setToUser} setToHome={setToHome} setToPost={setToPost}/>
      </div>
      <div>
        {toHome === true && <Home />}
        {toUser === true && <UserPage />} 
      </div>
        {toPost === true && <Post setToPost={setToPost}/>} 
    </main>
  );
};

export default InstaPage;
