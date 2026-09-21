const ChangePost = () => {
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
        {/* edit post btn */}
          <div>
            <button
              onClick={()=>{}}
              className="border border-b-0 border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Edit 
            </button>
          </div>
          {/* delete post btn */}
          <div>
            <button
              onClick={()=>{}}
              className="border border-b-0 border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Delete
            </button>
          </div>

          {/* cancel */}
          <div>
            <button
              onClick={()=>{}}
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

export default ChangePost