import React, { useEffect } from "react";
import { Button } from "../../../components";
import { Input } from "../../../components";
import * as S from "./style";

export const Login = () => {
    const [userName, setUserName] = React.useState("")
    const [userPassword, setUserPassword] = React.useState("")
    const [user, setUser] = React.useState([])

    React.useEffect(() => {
      const savedData = localStorage.getItem("saved")
      const savedJSON = JSON.parse(savedData!)
      setUser(savedJSON) 
    }, [])
;
    
    
    return (<>
                <div>
                  <S.title>Welcome,</S.title>

                  <S.subtitle>To continue to browse safely, log in 
                    to the <br /> network.</S.subtitle>
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
                      error={false}
                    />
                    <Input
                      labelTitle=""
                      placeholder="password"
                      type="text"
                      value={userPassword}
                      setValue={setUserPassword}
                      error={false}
                    />
                  </S.InputContainer>
                  <Button buttonName="Log in" />
                </S.Form>
                </>
              );
}