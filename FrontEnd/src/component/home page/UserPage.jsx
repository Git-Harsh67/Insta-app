import { createContext, useEffect, useState } from "react";
import EditPage from "./EditPage";
import ChangeImg from "./ChangeImg";
import { userProfile } from "../../api/user";

export const UserPageContext = createContext();

const UserPage = () => {
  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const [showEditPage, setShowEditPage] = useState(false);
  const [showChangeImgCard, setShowChangeImgCard] = useState(false);
  const [bio, setBio] = useState("");
  const [detail, setDetail] = useState({});

  const userDetails = async () => {
    const data = await userProfile();
    setDetail(data.user);
    return detail;
  };

  useEffect(() => {
    userDetails();
  });
  return (
    <>
      <UserPageContext.Provider
        value={{
          userImg,
          userName,
          bio,
          detail,
          setUserName,
          setShowEditPage,
          setBio,
          setShowChangeImgCard,
          setUserImg,
          userImg,
        }}
      >
        {showEditPage === false && (
          <div className="flex flex-col h-screen ml-[25vw] pt-15 items-center">
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
            <div>
              <p className="text-white text-4xl text-center mt-12">no posts</p>
            </div>
          </div>
        )}

        {showEditPage === true && <EditPage />}
        {showChangeImgCard === true && <ChangeImg />}
      </UserPageContext.Provider>
    </>
  );
};

export default UserPage;
