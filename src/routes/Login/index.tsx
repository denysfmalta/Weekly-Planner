import React from "react";
import logo from "../../assets/compass-logo.png";
import { Button } from "../../components";
import { Input } from "../../components";
import * as S from "../Register/style";

export const Login = () => {
    const [userName, setUserName] = React.useState("")
    const [userPassword, setUserPassword] = React.useState("")
    
    return (
            <S.Page>
              <S.textContainer>
                <div>
                  <S.title>Welcome,</S.title>
                  <S.subtitle>To continue to browse safely, log in to the network.</S.subtitle>
                </div>
                <S.login>Login</ S.login>
                <S.Form>
                  <S.InputContainer>
                    <Input
                      labelTitle=""
                      placeholder="username"
                      type="text"
                      value={userName}
                      setValue={setUserName}
                    />
                    <Input
                      labelTitle=""
                      placeholder="password"
                      type="text"
                      value={userPassword}
                      setValue={setUserPassword}
                    />
                  </S.InputContainer>
                  
                  <Button buttonName="Log in" />
                </S.Form>
              </S.textContainer>
              <S.imageContainer>
                <S.background>
                  <S.logo src={logo} />
                </S.background>
              </S.imageContainer>
            </S.Page>    
    );
}