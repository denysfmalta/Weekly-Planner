import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./routes";
import { Login } from "./routes/Login";
import { UserContext } from "./contexts/userContext";
import { PasswordContext } from "./contexts/passwordContext";
import { AuthContext } from "./contexts/authContext";
import { Dashboard } from "./routes/Dashboard";
import { Home } from "./routes/Home";

function App() {
  const [contextUser, setContextUser] = React.useState<string>("");
  const [passwordContext, setContextPassword] = React.useState<string>("");
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

 console.log("Dados do CONTEXT", contextUser, "  , ", passwordContext);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <PasswordContext.Provider value={{ passwordContext, setContextPassword }}>
        <UserContext.Provider value={{ contextUser, setContextUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </PasswordContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
