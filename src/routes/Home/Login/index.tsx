import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../components";
import { Redirect } from "../../../components/Redirect";
import { AuthContext } from "../../../contexts/authContext";
import { UserApi } from "../../../services/user-api";
import * as S from "./style";

export const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const login = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = {
        email: userName,
        password: userPassword,
      };
      UserApi.SingIn(data)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.token);
            setIsAuth(res.data.token);
          }
        })
        .catch((error: any) => {
          if (error.response.status === 403) {
            alert("This user doesn't exist. Please sign up first!");
          }
        });
    },
    [setIsAuth, userName, userPassword]
  );

  React.useEffect(() => {
    if (isAuth) {
      localStorage.setItem("token", JSON.stringify(isAuth));
      navigate("/dashboard");
    }
  }, [isAuth, navigate]);

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
