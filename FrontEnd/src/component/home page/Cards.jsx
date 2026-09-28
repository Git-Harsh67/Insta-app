import { useState } from "react";
import { like, unlike } from "../../api/post";
import { userProfile } from "../../api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostCard from "./PostCard";

const Cards = ({ userDetail }) => {
  const [follow, setFollow] = useState(false);
  const [showPostCard, setShowPostCard] = useState(false);
  const [selectedPostData, setSelectedPostData] = useState([]);
  const [showChangePostCard, setShowChangePostCard] = useState(false);

  const queryClient = useQueryClient();

  const userPro = useQuery({
    queryKey: ["user"],
    queryFn() {
      return userProfile();
    },
  });

  const user = userPro.data?.user || [];

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
              likes: [...post.likes, user._id],
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
              likes: post.likes.filter((id) => id !== user._id),
            };
          }
          return post;
        });
      });
    },
  });

  return (
    <div className="w-[40vw] rounded-md border-gray-500 text-white bg-gray-900 mt-6 mb-6 overflow-hidden">
      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-x-3">
          <button>
            <img
              className="w-7 h-7 border-none rounded-full object-cover"
              src={user?.pic}
              alt="profile pic"
            />
          </button>

          <p>{userDetail.postedBy.userName}</p>
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
        onClick={() => {
          console.log(userDetail);
        }}
        className=" w-full max-h-[90vh] object-contain bg-black"
        src={userDetail.photo}
        alt="post pic"
      />

      <div className="flex gap-x-4 ml-4 my-2">
        {/* like */}
        <div className="flex items-center gap-x-3">
          {userDetail.likes?.includes(user._id) === true ? (
            <button
              onClick={() => {
                unLikePost.mutate(userDetail._id);
              }}
            >
              <img className="w-7 h-7" src="./redHeart.png " alt="like logo" />
            </button>
          ) : (
            <button
              onClick={() => {
                likePost.mutate(userDetail._id);
              }}
            >
              <img
                className="w-7 h-7"
                src="./heart_logo.png"
                alt="unlike logo"
              />
            </button>
          )}
          <p>{userDetail.likes.length}</p>
        </div>
        {/* comment */}
        <div
          onClick={() => {
            setShowPostCard(true);
            setSelectedPostData(userDetail);
          }}
          className="flex items-center gap-x-3"
        >
          <button>
            <img className=" w-7 h-7" src="./chat_logo.png" alt="chat logo" />
          </button>
          <p>demo</p>
        </div>
      </div>

      <p className="ml-4 my-2">{userDetail.description}</p>

      {showPostCard === true && (
        <PostCard
          selectedPostData={selectedPostData}
          setShowPostCard={setShowPostCard}
          showChangePostCard={showChangePostCard}
          setShowChangePostCard={setShowChangePostCard}
        />
      )}
    </div>
  );
};

export default Cards;
