import Nav from "./Nav";
import Home from "./Home";
import UserPage from "./UserPage";
import { useState } from "react";

const InstaPage = () => {
  const[toHome, setToHome]=useState(true)
  const[toUser, setToUser]=useState(false)
  return (
    <main className="flex bg-gray-950 gap-x-12 ">
      <div className="bg-gray-950 h-dvh fixed">
        <Nav setToUser={setToUser} setToHome={setToHome}/>
      </div>
      <div>
         {toHome === true && <Home />}
        {toUser === true && <UserPage />} 
      </div>
    </main>
  );
};

export default InstaPage;
