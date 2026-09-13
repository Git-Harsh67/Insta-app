import { useEffect, useState } from "react";
import { allPost } from "../../api/post";
import Cards from "./Cards";

const Home = () => {
  const [posts, setPosts] = useState([]);

  async function result() {
    const res = await allPost();
    return setPosts(res);
  }

  useEffect(() => {
    result()
  });
  
  return (
    <div className="flex flex-col items-center ml-[25vw] ">
      {posts.map((e) => 
        <Cards key={e._id} like={e.likes.length} postImg={e.photo} description={e.description} name={e.postedBy.name} />
      )}
    </div>
  );
};

export default Home;
