import React from "react";
import logo from "../../assets/compass-logo.png";
import * as S from './style';
import image from "../../assets/image 2.png";

export const Register = ({image}: any)=> {
    
    return (
      <S.page>
        <S.textContainer>
          <S.title>Welcome,</S.title>
          <S.subtitle>Please, register to continue</S.subtitle>
        </S.textContainer>
        <S.imageContainer>
          <S.background current={image}>
        <S.logo src={logo}/>
        </S.background>
        </S.imageContainer>
          
        
      </S.page>
    );
    };