import React from "react";
import Nav from "./Nav";
import Cards from "./Cards";

const InstaPage = () => {
  return (
    <main className="flex bg-gray-950 gap-x-12 ">
    <div className="bg-gray-950 h-dvh fixed">
      <Nav />
    </div>
    <div className="ml-67">
      <Cards />
    </div>
    </main>
  );
};

export default InstaPage;
