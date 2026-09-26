import { useEffect, useState } from "react";
import { allPost } from "../../api/post";
import Cards from "./Cards";
import { Query, useQuery } from "@tanstack/react-query";

const Home = () => {
  async function result() {}

  const queryPost = useQuery({
    queryKey: ["posts"],
    queryFn() {
      return allPost();
    },
  });

  const posts = queryPost.data || [];

  return (
    <>
      {queryPost.isLoading && (
        <div className="flex flex-col items-center ml-[25vw] h-screen">
          <div className="flex justify-center h-screen font-bold text-white text-2xl text-center ml-[20vw]">
            <p>fetching the data ...</p>
          </div>
        </div>
      )}
      {queryPost.isSuccess && (
        <div
          className={`flex flex-col items-center ml-[25vw] ${posts.length === 1 && "h-screen"}`}
        >
          {/* {console.log(posts.length >= 1)} */}
          {posts.length === 0 && (
            <div className="flex justify-center h-screen items-center font-bold text-white text-4xl text-center ml-[20vw]">
              <p>There are no posts yet</p>
            </div>
          )}
          {/* {console.log(posts)} */}
          {posts.map((e) => (
            <Cards
              key={e._id}
              id={e._id}
              likes={e.likes}
              postImg={e.photo}
              description={e.description}
              name={e.postedBy.name}
              UserName={e.userName}
              postedby={e.postedBy._id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
