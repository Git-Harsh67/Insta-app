import { createContext, useState } from "react";
import { like, unlike } from "../../api/post";
import { userProfile } from "../../api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostCard from "./PostCard";

export const CardContext = createContext();

const Cards = (props) => {
  const [follow, setFollow] = useState(false);
  const [showPostCard, setShowPostCard] = useState(false);
  const [selectedPostData, setSelectedPostData] = useState([]);
  const [showChangePostCard, setShowChangePostCard] = useState(false);

  const queryClient = useQueryClient();

  const likePost = useMutation({
    mutationKey: ["like post"],
    mutationFn(id) {
      const res = like(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["posts"], (posts) => {
        return posts.map((post) => {
          if (post._id === props.id) {
            return {
              ...post,
              likes: [...post.likes, userID],
            };
          }
          return post;
        });
      });
    },
  });

  const unLikePost = useMutation({
    mutationKey: ["unlike post"],
    mutationFn(id) {
      const res = unlike(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["posts"], (posts) => {
        return posts.map((post) => {
          if (post._id === props.id) {
            return {
              ...post,
              likes: post.likes.filter((id) => id !== userID),
            };
          }
          return post;
        });
      });
    },
  });

  const user = useQuery({
    queryKey: ["user"],
    queryFn() {
      return userProfile();
    },
  });

  const userID = user.data?.user?._id || [];

  return (
    <CardContext.Provider
      value={{
        selectedPostData,
        setShowPostCard,
        showChangePostCard,
        setShowChangePostCard,
      }}
    >
      <div className="w-[40vw] rounded-md border-gray-500 text-white bg-gray-900 mt-6 mb-6 overflow-hidden">
        <div className="flex items-center justify-between py-2 px-4">
          <div className="flex items-center gap-x-3">
            <button>
              <img
                className="w-7 h-7 border rounded-full object-contain"
                src="./user_logo.png"
                alt="profile pic"
              />
            </button>

            <p>{props.name}</p>
          </div>
          {follow === true && (
            <button
              onClick={() => {
                setFollow(false);
              }}
              className="rounded-md bg-gray-600 px-2 font-extralight"
            >
              Following
            </button>
          )}
          {follow === false && (
            <button
              onClick={() => {
                setFollow(true);
              }}
              className="rounded-md bg-gray-600 px-2 font-extralight"
            >
              Follow
            </button>
          )}
        </div>

        <img
          className=" w-full max-h-[90vh] object-contain bg-black"
          src={props.postImg}
          alt="post pic"
        />

        <div className="flex gap-x-4 ml-4 my-2">
          {/* like */}
          <div className="flex items-center gap-x-3">
            {props.likes.includes(userID) === true ? (
              <button
                onClick={() => {
                  unLikePost.mutate(props.id);
                }}
              >
                <img
                  className="w-7 h-7"
                  src="./redHeart.png "
                  alt="like logo"
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  likePost.mutate(props.id);
                }}
              >
                <img
                  className="w-7 h-7"
                  src="./heart_logo.png"
                  alt="unlike logo"
                />
              </button>
            )}
            <p>{props.likes.length}</p>
          </div>
          {/* comment */}
          <div
            onClick={() => {
              setShowPostCard(true);
            }}
            className="flex items-center gap-x-3"
          >
            <button>
              <img className=" w-7 h-7" src="./chat_logo.png" alt="chat logo" />
            </button>
            <p>demo</p>
          </div>
        </div>

        <p className="ml-4 my-2">{props.description}</p>

        {showPostCard === true && <PostCard />}
      </div>
    </CardContext.Provider>
  );
};

export default Cards;
