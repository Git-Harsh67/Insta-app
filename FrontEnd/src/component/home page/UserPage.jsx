const UserPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen ml-77 mt-15 items-center">
        <div className="flex gap-x-16 items-center">
          <div>
            <img onClick={()=>{
              console.log("img clicked")
            }}
              className="w-34 h-34 border border-white rounded-full"
              src="./user_logo.png"
            />
          </div>
          <div className="flex flex-col gap-y-2 text-white ">
            <p className="font-bold text-3xl">userName</p>
            <p >Name</p>

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
              uoluptatibus sit minus ut rem velit saepe natus quas expedita esse
              nisi provident. Delectus reiciendis molestias corrupti accusantium
              facere illum consectetur deserunt quaerat necessitatibus. Quisquam
              ma
            </p>
            <div >
            <button className="bg-gray-800 py-2 px-4 font-semibold border-none rounded-xl mt-4 w-50" >Edit profile</button>
            </div>
          </div>
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
    </>
  );
};

export default UserPage;
