import "./App.css";
import { useState } from "react";
import InstaPage from "./component/home page/InstaPage";
import Log_Sign_Page from "./component/login Page/Log_SignPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {token ? <InstaPage setToken={setToken} /> : <Log_Sign_Page setToken={setToken}/> }
    </>
  );
}

export default App;
