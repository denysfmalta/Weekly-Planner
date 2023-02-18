import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { Redirect } from "../../components/Redirect";
import { UserApi } from "../../services/user-api";
import * as S from "./style";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();


  const login = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = {
        email: userName,
        password: userPassword
      }
     UserApi.SingIn(data).then(res => {
      console.log(res)
      if(res.status === 200) navigate("/dashboard")
      if(res.status === 403) {
        const {errors} = res.data
        errors.map((error: any) => (
          alert(`${error}`)

        ))
      }
     }).catch(error => {
      console.log(error)
     })
    },
    [navigate, userName, userPassword]
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
        <Redirect
          text="Don't have an account?"
          route="/register"
          textLink="Click here to register."
        />
      </S.Form>
    </>
  );
};
