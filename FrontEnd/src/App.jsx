import "./App.css";
import { createContext, useState } from "react";
import InstaPage from "./component/home page/InstaPage";
import Log_Sign_Page from "./component/login Page/Log_SignPage";

export const homeContext = createContext()

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
    <homeContext.Provider value={setToken}>
      {token  ? <InstaPage /> : <Log_Sign_Page /> }
    </homeContext.Provider>
    </>
  );
}

export default App;
