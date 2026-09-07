import { useState } from "react";
import { allPost } from "../../api/post";
import Cards from "./Cards"

const Home = async() => {
  const [posts, setPosts]= useState([])
  return (
    <div className="flex flex-col items-center ml-67 h-screen">
      {setPosts(await allPost())}
      {/* <Cards postImg="" discription="" name=""/> */}
      {posts.map((e)=>{
        <Cards postImg={e.photo} discription={e.discription} name={e.name}/> 
      })}

    </div>
  );
};


export default Home