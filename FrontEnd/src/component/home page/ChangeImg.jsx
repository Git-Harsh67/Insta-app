const ChangeImg = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900/70 ">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          {/* title */}
          <div>
            <p className="bg-gray-950 text-white py-5 text-3xl text-center border border-gray-700 rounded-t-2xl">
              Change Profile
            </p>
          </div>
          {/* upload */}
          <div>
            <button className=" bg-gray-950 text-blue-500 w-[28vw] text-center py-3 text-lg">
              <label htmlFor="input">Upload Photo</label>
            </button>
            <input
              onChange={async (e) => {}}
              className="hidden"
              id="input"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
            />
          </div>
          {/* Remove Current Photo */}
          <div>
            <button className="border border-b-none  border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg">
              Remove Current Photo
            </button>
          </div>
          {/* cancel */}
          <div>
            <button className="border rounded-b-2xl border-gray-600 bg-gray-950 text-white w-[28vw] text-center py-3 text-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeImg;
