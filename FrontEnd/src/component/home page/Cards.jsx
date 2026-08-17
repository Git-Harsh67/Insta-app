import React from "react";
//   return (
//     <div className="w-fit rounded border-2 border-gray-500 text-white bg-gray-900 mt-5 mb-5">

//       <div className="flex items-center justify-between py-2 px-4">
//         <div className="flex items-center gap-x-3">
//           <button>
//             <img
//               className="w-8 h-8 border rounded-full object-fill"
//               src="./user_logo.png"
//               alt="profile pic"
//             />
//           </button>

//           <p>user name</p>
//         </div>

//         <button className="rounded-md bg-gray-600 px-2 font-extralight">
//           Follow
//         </button>
//       </div>

//       <img src={props.postImg} alt="post pic" />

//       <div className="flex gap-x-4 ml-4 mt-2">
//         <div className="flex gap-x-3">
//           <button>
//             <img
//               className="w-[2vw]"
//               src="./heart_logo.png"
//               alt="like logo"
//             />
//           </button>

//           <p>12</p>
//         </div>

//         <button>
//           <img
//             className="w-[2vw]"
//             src="./chat_logo.png"
//             alt="chat logo"
//           />
//         </button>
//       </div>

//       <p className="ml-4 my-2">this is</p>
//     </div>
//   );
// };

// const Cards = (props) => {
//   return (
//     <div className="w-fit rounded border-2 border-gray-500 text-white bg-gray-900 mt-8">

//       {/* Header */}
//       <div className="flex items-center justify-between py-2 px-4">
//         <div className="flex items-center gap-x-3">
//           <button>
//             <img
//               className="w-7 h-7 border rounded-full"
//               src="./user_logo.png"
//               alt="profile pic"
//             />
//           </button>

//           <p>user name</p>
//         </div>

//         <button className="rounded-md bg-gray-600 px-2 font-extralight">
//           Follow
//         </button>
//       </div>

//       {/* Post */}
//       <img
//         className="block w-auto"
//         src={props.postImg}
//         alt="post pic"
//       />

//       {/* Actions */}
//       <div className="flex gap-x-4 ml-4 my-2">
//         <div className="flex gap-x-3">
//           <button>
//             <img
//               className="w-7 h-7"
//               src="./heart_logo.png"
//               alt="like logo"
//             />
//           </button>
//           <p>12</p>
//         </div>

//         <button>
//           <img
//             className="w-7 h-7"
//             src="./chat_logo.png"
//             alt="chat logo"
//           />
//         </button>
//       </div>

//       <p className="ml-4 my-2">this is</p>
//     </div>
//   );
// };

const Cards = (props) => {
  return (
    <div className="w-140 rounded-md border-gray-500 text-white bg-gray-900 mt-6 mb-6 overflow-hidden ">

      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-x-3">
          <button>
            <img
              className="w-7 h-7 border rounded-full"
              src="./user_logo.png"
              alt="profile pic"
            />
          </button>

          <p>user name</p>
        </div>

        <button className="rounded-md bg-gray-600 px-2 font-extralight">
          Follow
        </button>
      </div>

      <img
        className="block w-full h-auto"
        src={props.postImg}
        alt="post pic"
      />

      <div className="flex gap-x-4 ml-4 my-2">
        <div className="flex gap-x-3">
          <button>
            <img
              className="w-7 h-7"
              src="./heart_logo.png"
              alt="like logo"
            />
          </button>

          <p>12</p>
        </div>

        <button>
          <img
            className="w-7 h-7"
            src="./chat_logo.png"
            alt="chat logo"
          />
        </button>
      </div>

      <p className="ml-4 my-2">this is</p>
    </div>
  );
};

export default Cards;
