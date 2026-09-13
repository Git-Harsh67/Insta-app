import { useState } from "react";

const EditPage = (props) => {
  return (
    <div className="h-screen w-[55vw] ml-[25vw] text-white">
      {/* back btn */}
      <div className="fixed top-5 right-5">
        <img
          onClick={() => {
            props.setShowEditPage(false);
          }}
          className="w-[2vw]"
          src="./arrow_logo.png"
          alt="arrow_logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            props.setShowEditPage(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <div className="flex flex-col gap-y-2 ">
          <div>
            <p className="text-2xl font-semibold my-10">Edit profile</p>
          </div>
          {/* change photo */}
          <div className="flex justify-between items-center bg-gray-800 py-4 px-6 border border-gray-700 rounded-xl outline-none">
            {/* user detail */}
            <div className="flex items-center gap-x-[2vw]">
              <img
                className="w-[5vw] h-[5vw] border border-white rounded-full"
                src="./user_logo.png"
              />
              <div>
                <p className="font-semibold text-xl">Username</p>
                <p>name</p>
              </div>
            </div>

            {/* change btn */}
            <div>
              <button className="border-none rounded-lg bg-blue-700 py-2 px-5 font-semibold" >
                Change photo
              </button>
            </div>
          </div>

          {/* bio input */}
          <div>
            <label className="mt-4 block text-xl font-semibold ">Bio</label>

            <textarea
              onChange={(e) => {
                setTimeout(() => {
                  props.setBio(e.target.value);
                }, 600);
              }}
              placeholder="bio"
              className="w-full h-[15vh] bg-gray-800/60 border border-gray-700 rounded-xl outline-none px-4 py-3 mt-2 placeholder-gray-500 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>
          {/* submit btn */}
          <div className="text-end ">
            <button type="submit" className="border-none rounded-lg bg-green-700 py-2 px-5 mt-6 font-semibold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
