import React from "react";

const LeftSide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-dvh px-2 w-[55vw] gap-4">
      <h1 className="text-white text-3xl font-semibold text-wrap mt-4 px-18 text-center">
        See every day moments form your{" "}
        <span className="bg-linear-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          close friends
        </span>
        .
      </h1>
      <img
        className="w-80"
        src="https://static.cdninstagram.com/rsrc.php/yJ/r/53X3pk-t2Gn.webp"
        alt="Image related to Instagram"
      />
    </div>
  );
};

export default LeftSide;
