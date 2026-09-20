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
    result();
  });

  return (
    <div className="flex flex-col items-center ml-[25vw]">
      {posts.length === 0 && (
        <div className="flex justify-center h-screen items-center font-bold text-white text-4xl text-center ml-[20vw]">
          <p>There are no posts yet</p>
        </div>
      )}

      {posts.map((e) => (
        <Cards
          key={e._id}
          like={e.likes.length}
          postImg={e.photo}
          description={e.description}
          name={e.postedBy.name}
          UserName={e.userName}
        />
      ))}
    </div>
  );
};

export default Home;
