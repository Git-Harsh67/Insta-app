import { useState } from "react";
import { like, unlike } from "../../api/post";
import { follow, unFollow } from "../../api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostCard from "./PostCard";

const Cards = ({ postDetail , user }) => {

  const [showPostCard, setShowPostCard] = useState(false);
  const [showPostMenuCard, setShowPostMenuCard] = useState(false);

  const queryClient = useQueryClient();

  const likePost = useMutation({
    mutationKey: ["like post"],
    mutationFn(id) {
      const res = like(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["posts"], (oldPosts) => {
        return oldPosts.map((post) => {
          if (post._id === postDetail._id) {
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
          if (post._id === postDetail._id) {
            return {
              ...post,
              likes: post.likes.filter((id) => id !== user._id),
            };
          }
          return post;
        });
      });
    },
    onError: (error) => alert(`Error : ${error.message}`),
  });

  const handleFollow = useMutation({
    mutationFn: async (id) => {
      const res = await follow(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["user"], (oldUser) => {
        return {
          ...oldUser,
          user: {
            ...oldUser.user,
            following: [...oldUser.user.following, postDetail.postedBy._id],
          },
        };
      });
    },
    onError(error) {
      return error.message;
    },
  });

  const handleUnFollow = useMutation({
    mutationFn: async (id) => {
      const res = await unFollow(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["user"], (oldUser) => {
        return {
          ...oldUser,
          user: {
            ...oldUser.user,
            following: oldUser.user.following.filter(
              (e) => e !== postDetail.postedBy._id,
            ),
          },
        };
      });
    },
    onError(error) {
      return error.message;
    },
  });

  // const addComment = useMutation({
  //   mutationFn() {},
  // });

  return (
    <div className="w-[40vw] rounded-md border-gray-500 text-white bg-gray-900 mt-6 mb-6 overflow-hidden">
      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-x-3">
          <button>
            <img
              className="w-7 h-7 border-none rounded-full object-cover"
              src={postDetail?.postedBy?.pic}
              alt="profile pic"
            />
          </button>
          <p>{postDetail?.postedBy?.userName}</p>

          {/* follow / unFollow */}
        </div>
        {user?.following?.includes(postDetail?.postedBy?._id) === true && (
          <button
            onClick={() => {
              handleUnFollow.mutate(postDetail?.postedBy?._id);
            }}
            className="rounded-md bg-gray-600 px-2 font-extralight"
          >
            Following
          </button>
        )}
        {user?.following?.includes(postDetail?.postedBy?._id) === false && (
          <button
            onClick={() => {
              handleFollow.mutate(postDetail?.postedBy?._id);
            }}
            className="rounded-md bg-gray-600 px-2 font-extralight"
          >
            Follow
          </button>
        )}
      </div>

      <img
        className=" w-full max-h-[90vh] object-contain bg-black"
        src={postDetail?.photo}
        alt="post pic"
      />

      {/* like / unlike */}
      <div className="flex gap-x-4 ml-4 my-2">
        {/* like */}
        <div className="flex items-center gap-x-3">
          {postDetail?.likes?.includes(user?._id) === true ? (
            <button
              onClick={() => {
                unLikePost.mutate(postDetail?._id);
              }}
            >
              <img className="w-7 h-7" src="./redHeart.png " alt="like logo" />
            </button>
          ) : (
            <button
              onClick={() => {
                likePost.mutate(postDetail?._id);
              }}
            >
              <img
                className="w-7 h-7"
                src="./heart_logo.png"
                alt="unlike logo"
              />
            </button>
          )}
          <p>{postDetail?.likes.length}</p>
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
          <p>{postDetail?.comment?.length}</p>
        </div>
      </div>

      <p className="ml-4 my-2">{postDetail?.description}</p>

      {showPostCard === true && (
        <PostCard
          setShowPostCard={setShowPostCard}
          showPostMenuCard={showPostMenuCard}
          setShowPostMenuCard={setShowPostMenuCard}
          postDetail={postDetail}
          user={user}
        />
      )}
    </div>
  );
};

export default Cards;
