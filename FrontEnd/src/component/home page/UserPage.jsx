import { createContext, useEffect, useState } from "react";
import EditPage from "./EditPage";
import { userProfile } from "../../api/user";
import { myPost } from "../../api/post";

export const UserPageContext = createContext();

const UserPage = () => {
  const [detail, setDetail] = useState([]);
  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [showEditPage, setShowEditPage] = useState(false);
  const [showChangeImgCard, setShowChangeImgCard] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  const userDetails = async () => {
    const data = await userProfile();
    setDetail(data.user);
  };

  const posts = async () => {
    const data = await myPost();
    setUserPosts(data.myPosts)
  };

  useEffect(() => {
    userDetails();
    posts();
  }, []);

  return (
    <>
      <UserPageContext.Provider
        value={{
          userImg,
          userName,
          bio,
          detail,
          userImg,
          showChangeImgCard,
          setUserName,
          setShowEditPage,
          setBio,
          setShowChangeImgCard,
          setUserImg,
        }}
      >
        {showEditPage === false && (
          <div className="flex flex-col h-screen ml-[20vw] pt-5 items-center bg-gray-950">
            <div className="flex gap-x-16 items-center">
              <div>
                <img
                  className="w-30 h-30 border-none rounded-full object-cover"
                  src={detail.pic || `./user_logo.png`}
                />
              </div>
              <div className="flex flex-col gap-y-2 text-white ">
                <p className="font-bold text-3xl">{detail.userName}</p>
                <p>{detail.name}</p>

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
                  {detail.bio}
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
              <div className="flex justify-evenly w-[50vw] mt-12 border-white border-b pb-4 gap-x-12">
                <img className="w-[2vw]" src="profile_logo.png" alt="" />
                <img className="w-[2vw]" src="White_heart.png" alt="" />
              </div>
            </div>
            {/* <p className="text-white text-4xl text-center mt-12">no posts</p> */}
            <div className="flex flex-wrap gap-1 mt-1 bg-gray-950 columns-3">
              {/* {console.log(userPosts)} */}
              {userPosts.map((e)=>
              <div key={e._id} className=" bg-gray-600 ">
                <img
                  className=" w-80 h-100 object-contain "
                  src={e.photo}
                />
              </div>
              )}
            </div>
          </div>
        )}

        {showEditPage === true && <EditPage />}
      </UserPageContext.Provider>
    </>
  );
};

export default UserPage;
