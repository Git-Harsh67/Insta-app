import { useContext } from "react";
import { UserPageContext } from "./UserPage";
import { uploadImage } from "../../utils/uploadImage";

const ChangeImg = () => {
  const { setShowChangeImgCard, setUserImg } = useContext(UserPageContext);
  return (
    <div className="fixed inset-0 z-50 bg-gray-900/70 ">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          {/* title */}
          <div>
            <p className="bg-gray-950 text-white py-5 text-3xl text-center border border-gray-700 rounded-t-2xl border-b-0">
              Change Profile
            </p>
          </div>
          {/* upload */}
          <div>
            <button className=" bg-gray-950 text-blue-500 w-[28vw] text-center py-3 text-lg border border-gray-700 border-b-0 hover:bg-gray-900">
              <label htmlFor="input">Upload Photo</label>
            </button>
            <input
              onChange={async (e) => {
                const imgFile = e.target.files[0];
                const imgURl = await uploadImage(imgFile);
                if (imgURl) {
                  setUserImg(imgURl);
                  setShowChangeImgCard(false);
                }
              }}
              className="hidden"
              id="input"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
            />
          </div>
          {/* Remove Current Photo */}
          <div>
            <button
              onClick={() => {
                setUserImg("");
                setShowChangeImgCard(false);
              }}
              className="border border-b-0 border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Remove Current Photo
            </button>
          </div>
          {/* cancel */}
          <div>
            <button
              onClick={() => {
                setShowChangeImgCard(false);
              }}
              className="border rounded-b-2xl border-gray-600 bg-gray-950 text-white w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeImg;
