import { useContext, useState } from "react";
import { UserPageContext } from "./UserPage";
import { editProfile } from "../../api/user";
import ChangeImg from "./ChangeImg";

const EditPage = () => {
  const { setShowEditPage, setShowChangeImgCard, showChangeImgCard, detail } =
    useContext(UserPageContext);

  const [editUserName, setEditUserName] = useState(detail.userName);
  const [editUserImg, setEditUserImg] = useState(detail.pic);
  const [editBio, setEditBio] = useState(detail.bio);

  const changes = {
    pic: editUserImg,
    userName: editUserName,
    bio: editBio,
  };

  return (
    <div className="h-screen w-[55vw] ml-[25vw] text-white">
      {/* back btn */}
      <div className="fixed top-5 right-5">
        <img
          onClick={() => {
            setShowEditPage(false);
          }}
          className="w-[2vw]"
          src="./arrow_logo.png"
          alt="arrow_logo"
        />
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await editProfile(changes);
            setShowEditPage(false);
            detail.userName = editUserName;
            detail.pic = editUserImg;
            detail.bio = editBio;
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <div className="flex flex-col gap-y-2 ">
          <div>
            <p className="text-2xl font-semibold my-8">Edit profile</p>
          </div>
          {/* change photo */}
          <div className="flex justify-between items-center bg-gray-800 py-4 px-6 border border-gray-700 rounded-xl outline-none">
            {/* user detail */}
            <div className="flex items-center gap-x-[2vw]">
              <img
                className="w-[5vw] h-[5vw] border-none rounded-full object-cover"
                src={editUserImg}
                // `./user_logo.png`
              />
              <div>
                <p className="font-semibold text-xl">{editUserName}</p>
                <p>{detail.name}</p>
              </div>
            </div>

            {/* change btn */}
            <div>
              <button
                type="button"
                onClick={() => {
                  setShowChangeImgCard(true);
                }}
                className="border-none rounded-lg bg-blue-700 py-2 px-5 font-semibold"
              >
                Change photo
              </button>
            </div>
          </div>

          {/* UserName */}
          <div>
            <label className="mt-4 block text-xl font-semibold ">
              User name
            </label>
            <input
              value={editUserName}
              onChange={(e) => {
                setEditUserName(e.target.value);
              }}
              type="text"
              placeholder="user name"
              className="w-full h-[8vh] bg-gray-800/60 border border-gray-700 rounded-xl outline-none px-4 py-3 mt-2 placeholder-gray-500 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* bio input */}
          <div>
            <label className="mt-4 block text-xl font-semibold ">Bio</label>
            <textarea
              value={editBio}
              onChange={(e) => {
                setEditBio(e.target.value);
              }}
              placeholder="bio"
              className="w-full h-[15vh] bg-gray-800/60 border border-gray-700 rounded-xl outline-none px-4 py-3 mt-2 placeholder-gray-500 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* submit btn */}
          <div className="text-end ">
            <button
              type="submit"
              name="action"
              value="submit"
              className="border-none rounded-lg bg-green-700 py-2 px-5 mt-6 font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {showChangeImgCard === true && (
        <ChangeImg setEditUserImg={setEditUserImg} />
      )}
    </div>
  );
};

export default EditPage;
