import "./App.css";
import { createContext, useState } from "react";
import InstaPage from "./component/home page/InstaPage";
import Log_Sign_Page from "./component/login Page/Log_SignPage";

export const Context = createContext()

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
    <Context.Provider value={setToken}>
      {token  ? <InstaPage /> : <Log_Sign_Page /> }
    </Context.Provider>
    </>
  );
}

export default App;
