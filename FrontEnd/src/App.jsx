import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import LoginCard from "./component/LoginCard";
import SignUpCard from "./component/SignUpCard";
import LeftSide from "./component/LeftSideOfHome";

function App() {
  const [toSignCard,setToSignCard]=useState(false) 
  const [toLogCard,setToLogCard]=useState(true) 

  return (
    <>
      <main className="flex bg-gray-950 h-dvh">
        {/* left side */}
        <LeftSide />

        {/* right side */}
        
        {toLogCard === true && <LoginCard setToSignCard={setToSignCard} setToLogCard={setToLogCard} />}
        {toSignCard === true && <SignUpCard setToSignCard={setToSignCard} setToLogCard={setToLogCard} />}
      </main>
    </>
  );
}

export default App;
