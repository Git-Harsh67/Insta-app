import "./App.css";
import { useState } from "react";
import InstaPage from "./component/home page/InstaPage";
import Log_Sign_Page from "./component/login Page/Log_SignPage";

function App() {
  const [toAuth , setToAuth]= useState(true)
  const [toHome , setToHome]= useState(false)
  return (
    <>
    {toAuth === true && <Log_Sign_Page setToAuth={setToAuth} setToHome={setToHome}/>}
    {toHome === true && <InstaPage setToAuth={setToAuth} setToHome={setToHome}/>}

    </>
  );
}

export default App;
