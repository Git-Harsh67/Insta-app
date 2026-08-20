
const UserPage = () => {
  return (
    <>
      <div className="h-screen ml-67 ">
        <div>
            <p className="text-white">hello</p>
          <button
            onClick={() => {
              props.setToken(localStorage.removeItem("token"));
            }}
            className="p-1 text-white bg-gray-600 "
          >
            log out
          </button>
        </div>
      </div>
    </>
  );
};

export default UserPage;
