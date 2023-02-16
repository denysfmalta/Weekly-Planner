import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";



export const ReturnRegister = () => {
    const navigate = useNavigate()

    
    function handleClick() {
      navigate("/register");
      }
    return (<S.Paragraph>Don't have an account yet? <S.Link onClick={handleClick}>Click here to register.</S.Link></S.Paragraph>)
}

export const ReturnLogin = () => {
    const navigate = useNavigate()

    function handleClick() {
      navigate("/");
      }
    return (<S.Paragraph>Already have an account? <S.Link onClick={handleClick}>Click here to login.</S.Link></S.Paragraph>)
}
