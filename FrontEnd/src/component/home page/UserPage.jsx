import { createContext, useEffect, useState } from "react";
import EditPage from "./EditPage";
import { userProfile } from "../../api/user";
import { myPost } from "../../api/post";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";

export const UserPageContext = createContext();

const UserPage = () => {
  const userQuery = useQuery({
    queryKey: ["userDetails"],
    queryFn() {
      return userProfile();
    },
  });

  const myPostsQuery = useQuery({
    queryKey: ["myPosts"],
    queryFn() {
      return myPost();
    },
  });

  const detail = userQuery.data?.user || [];
  const userPosts = myPostsQuery.data?.myPosts || [];

  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [showEditPage, setShowEditPage] = useState(false);
  const [showChangeImgCard, setShowChangeImgCard] = useState(false);
  const [showPostCard, setShowPostCard] = useState(false);
  const [showChangePostCard, setShowChangePostCard] = useState(false);

  const [selectedPostData, setSelectedPostData] = useState([]);

  return (
    <>
      <UserPageContext.Provider
        value={{
          userImg,
          userName,
          bio,
          showChangeImgCard,
          selectedPostData,
          showChangePostCard,
          setUserName,
          setShowEditPage,
          setBio,
          setShowChangeImgCard,
          setUserImg,
          setShowPostCard,
          setShowChangePostCard,
        }}
      >
        {showEditPage === false && (
          <div
            className={`flex flex-col pt-5 ml-[20vw] items-center bg-gray-950 ${
              userPosts?.length === 0 ? "h-screen" : ""
            }`}
          >
            <div className="flex gap-x-16  items-center">
              <div>
                <img
                  className="w-30 h-30 border-none rounded-full object-cover"
                  src={detail?.pic || `./user_logo.png`}
                />
              </div>
              <div className="flex flex-col gap-y-2 text-white ">
                <p className="font-bold text-3xl">{detail?.userName}</p>
                <p>{detail?.name}</p>

                <div className="flex gap-x-4 ">
                  <p>
                    <strong>1</strong> post
                  </p>
                  <p>
                    <strong>1</strong> follower
                  </p>
                  <p>
                    <strong>1</strong> following
                  </p>
                </div>

                <p className="max-w-md max-h-[15vh] overflow-hidden">
                  {detail?.bio}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setShowEditPage(true);
                }}
                className="bg-gray-800 text-white py-2 px-4 font-semibold border-none rounded-xl mt-4 w-50"
              >
                Edit profile
              </button>
            </div>

            {/* user post and liked post */}
            <div>
              <div className="flex justify-evenly w-[60vw] mt-12 border-gray-600 border-b pb-4 gap-x-12">
                <img className="w-[2vw]" src="profile_logo.png" alt="" />
                <img className="w-[2vw]" src="White_heart.png" alt="" />
              </div>
            </div>

            {userPosts?.length === 0 && (
              <div className="flex justify-center items-center h-[40vh]">
                <p className="text-white text-2xl font-medium text-center">
                  no posts
                </p>
              </div>
            )}

            {userPosts?.length !== 0 && (
              <div className="grid grid-cols-3 mt-1 bg-gray-950 mb-3 gap-x-0.5">
                {userPosts?.map((post) => (
                  <div key={post._id} className=" bg-black   ">
                    <img
                      onClick={() => {
                        setShowPostCard(true);
                        setSelectedPostData(post);
                      }}
                      className=" w-80 h-100 object-contain "
                      src={post.photo}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {showEditPage === true && <EditPage />}
        {showPostCard === true && (
          <PostCard
            selectedPostData={selectedPostData}
            setShowPostCard={setShowPostCard}
            showChangePostCard={showChangePostCard}
            setShowChangePostCard={setShowChangePostCard}
          />
        )}
      </UserPageContext.Provider>
    </>
  );
};

export default UserPage;
