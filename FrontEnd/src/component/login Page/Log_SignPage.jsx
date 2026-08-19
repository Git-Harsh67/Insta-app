import React from "react";
import { useState } from "react";
import LeftSide from "./LeftSideOfHome";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

const Log_Sign_Page = (props) => {
  const [toSignCard, setToSignCard] = useState(false);
  const [toLogCard, setToLogCard] = useState(true);

  return (
    <>
      <main className="flex bg-gray-950 h-dvh">
        {/* left side */}

        <LeftSide />

        {/* right side */}

        {toLogCard === true && (
          <LoginCard
            setToSignCard={setToSignCard}
            setToLogCard={setToLogCard}
          />
        )}
        {toSignCard === true && (
          <SignUpCard
            setToSignCard={setToSignCard}
            setToLogCard={setToLogCard}
          />
        )}
      </main>
    </>
  );
};

export default Log_Sign_Page;
