const UserPage = () => {
  return (
    <>
      <div className="h-screen ml-77 mt-15">
        <div className="flex gap-x-6 items-center">
          <div>
            <img
              className="w-34 h-34 border border-white rounded-full object-cover"
              src="./user_logo.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-2 text-white ">
            <p className= "font-bold text-3xl">userName</p>
            <p className="">Name</p>
            <div className="flex gap-x-4 ">
              <p><strong>1</strong> post </p>
              <p><strong>1</strong> follower </p>
              <p><strong>1</strong> following </p>
            </div>
            <p className="max-w-md max-h-[15vh] overflow-hidden">uoluptatibus sit minus ut rem velit saepe natus quas expedita esse nisi provident. Delectus reiciendis molestias corrupti accusantium facere illum consectetur deserunt quaerat necessitatibus. Quisquam ma</p>
          </div>
          <button
            onClick={() => {
              props.setToken(localStorage.removeItem("token"));
            }}
            className="p-1 h-9 text-white bg-red-600 "
          >
            log out
          </button>
        </div>
      </div>
    </>
  );
};

export default UserPage;
