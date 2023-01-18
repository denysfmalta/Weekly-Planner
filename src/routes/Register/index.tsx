import React from "react";
import logo from "../../assets/compass-logo.png";
import { Button } from "../../components";
import { Input } from "../../components";
import * as S from "./style";

export const Register = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [yourCountry, setYourCountry] = React.useState("");
  const [yourCity, setYourCity] = React.useState("");
  const [yourEmail, setYourEmail] = React.useState("");
  const [yourPassword, setYourPassword] = React.useState("");
  const [yourConfirmedPassword, setYourConfirmedPassword] = React.useState("");

  React.useEffect(() => {
    const storedData = {
      firstName,
      lastName,
      birthDate,
      yourCountry,
      yourCity,
      yourEmail,
      yourPassword,
      yourConfirmedPassword,
    };

    localStorage.setItem("saved", JSON.stringify(storedData));
  }, [birthDate, firstName, lastName, yourCity, yourConfirmedPassword, yourCountry, yourEmail, yourPassword]);

  const saved = localStorage.getItem("saved");
  console.log("VALORES SALVOS LOCALSTORAGE: ", saved);

  return (
    <S.Page>
      <S.textContainer>
        <div>
          <S.title>Welcome,</S.title>
          <S.subtitle>Please, register to continue</S.subtitle>
        </div>
        <S.Form>
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
            <Input
              labelTitle="birth date"
              placeholder="MM/DD/YYYY"
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
              type="email"
              value={yourEmail}
              setValue={setYourEmail}
            />
            <Input
              labelTitle="password"
              placeholder="Your password"
              type="password"
              value={yourPassword}
              setValue={setYourPassword}
            />
            <Input
              labelTitle="password"
              placeholder="Confirm your password"
              type="password"
              value={yourConfirmedPassword}
              setValue={setYourConfirmedPassword}
            />
          </S.InputContainer>
          <Button buttonName="Register now" />
        </S.Form>
      </S.textContainer>
      <S.imageContainer>
        <S.background>
          <S.logo src={logo} />
        </S.background>
      </S.imageContainer>
    </S.Page>
  );
};
