import React from "react";
import logo from "../../assets/compass-logo.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as S from "./style";



export const Register = ({ image }: any) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [yourCountry, setYourCountry] = React.useState("");
  const [yourCity, setYourCity] = React.useState("");
  const [yourEmail, setYourEmail] = React.useState("");
  const [yourPassword, setYourPassword] = React.useState("");
  const [yourConfirmedPassword, setYourConfirmedPassword] = React.useState("");

  return (
    <S.Page>
      <S.textContainer>
        <S.title>Welcome,</S.title>
        <S.subtitle>Please, register to continue</S.subtitle>

        <S.InputContainer>
          <Input
            labelTitle="first name"
            placeholder="Your first name"
            type="text"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            labelTitle="last name"
            placeholder="Your first name"
            type="text"
            value={lastName}
            setValue={setLastName}
          />
        </S.InputContainer>
        <Button buttonName="Register now" />
      </S.textContainer>
      <S.imageContainer>
        <S.background></S.background>
        <S.logo src={logo} />
      </S.imageContainer>
    </S.Page>
  );
  }