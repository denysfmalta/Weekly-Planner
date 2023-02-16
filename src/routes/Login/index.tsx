import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { ReturnRegister } from "../../components/Return";
import * as S from "./style";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState<any | null>({});

  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("userData");
    const user = JSON.parse(data!);
    setUser(user);
    //console.log("dados do localStorage", user.yourEmail, user.yourPassword);
  }, [navigate, userName]);

  const login = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("dados dos inputs", userName, userPassword);

      try {
        if (userName === user.yourEmail && userPassword === user.yourPassword) {
          navigate("/dashboard");
          alert("Login bem sucedido");
        }
      } catch (e) {}
    },
    [navigate, user.yourEmail, user.yourPassword, userName, userPassword]
  );

  return (
    <>
      <div>
        <S.title>Welcome,</S.title>

        <S.subtitle>
          To continue to browse safely, log in to the <br /> network.
        </S.subtitle>
      </div>
      <S.login>Login</S.login>
      <S.Form onSubmit={(e) => login(e)}>
        <S.InputContainer>
          <Input
            labelTitle=""
            placeholder="username"
            type="email"
            value={userName}
            setValue={setUserName}
            error={false}
          />
          <Input
            labelTitle=""
            placeholder="password"
            type="password"
            value={userPassword}
            setValue={setUserPassword}
            error={false}
          />
        </S.InputContainer>
        <Button buttonName="Login" />
        <ReturnRegister />
      </S.Form>
    </>
  );
};
