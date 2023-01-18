import React from "react";
import logo from "../../assets/compass-logo.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as S from "../../style";

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
    <S.page>
      <S.textContainer>
        <S.title>Welcome,</S.title>
        <S.subtitle>Please, register to continue</S.subtitle>
      
        <S.inputForm>
        <Input
          labelTitle="first name"
          placeholder="Your first name"
          type="text"
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          labelTitle="last name"
          placeholder="Your last name"
          type="text"
          value={lastName}
          setValue={setLastName}
        />
        <Input
          labelTitle="birth date"
          placeholder="MM/DD/YY"
          type="text"
          value={birthDate}
          setValue={setBirthDate}
        />
        <Input
          labelTitle="Country"
          placeholder="Your Country"
          type="text"
          value={yourCountry}
          setValue={setYourCountry}
        />
        <Input
          labelTitle="City"
          placeholder="Your City"
          type="text"
          value={yourCity}
          setValue={setYourCity}
        />
        <Input
          labelTitle="e-mail"
          placeholder="A valid e-mail here"
          type="text"
          value={yourEmail}
          setValue={setYourEmail}
        />
        <Input
          labelTitle="password"
          placeholder="Your password"
          type="text"
          value={yourPassword}
          setValue={setYourPassword}
        />
        <Input
          labelTitle="password"
          placeholder="Confirm your password"
          type="text"
          value={yourConfirmedPassword}
          setValue={setYourConfirmedPassword}
        />
        </S.inputForm>
       
        <Button buttonName="Register now" />
      </S.textContainer>
      <S.imageContainer>
          <S.logo src={logo} />
      </S.imageContainer>
    </S.page>
  );
};
