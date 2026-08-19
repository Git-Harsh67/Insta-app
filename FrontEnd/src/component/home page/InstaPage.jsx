import React from "react";
import Nav from "./Nav";
import Cards from "./Cards";

const InstaPage = (props) => {
  return (
    <main className="flex bg-gray-950 gap-x-12 ">
    <div className="bg-gray-950 h-dvh fixed">
      <Nav />
    </div>
    <div className="flex flex-col items-center ml-67 ">
      <Cards postImg="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/66/93/04/caption.jpg?w=800&h=800&s=1"/>

      <Cards postImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61_2nhui8CrXuWZW2KSRP_1jdFgsT3r6gqlJXXBJ39hrtQrHbY40xdr0&s=10" />
    </div>
    <div ><button onClick={()=>{
      props.setToken(localStorage.removeItem("token"))
    }} className="p-1 text-white bg-gray-600 ">log out</button></div>
    </main>
  );
};

export default InstaPage;
