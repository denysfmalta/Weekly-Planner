import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Error } from "../../../components";
import { Input } from "../../../components";
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

  const [errorFirstName, setErrorFirstName] = React.useState(false);
  const [errorLastName, setErrorLastName] = React.useState(false);
  const [errorBirthDate, setErrorBirthDate] = React.useState(false);
  const [errorYourCountry, setErrorYourCountry] = React.useState(false);
  const [errorYourCity, setErrorYourCity] = React.useState(false);
  const [errorYourEmail, setErrorYourEmail] = React.useState(false);
  const [errorYourPassword, setErrorYourPassword] = React.useState(false);
  const [errorYourConfirmedPassword, setErrorYourConfirmedPassword] =
    React.useState(false);
    const navigate = useNavigate()

  React.useEffect(() => {
    localStorage.setItem(
      "saved",
      JSON.stringify({
        firstName,
        lastName,
        birthDate,
        yourCountry,
        yourCity,
        yourEmail,
        yourPassword,
        yourConfirmedPassword,
      })
    );
  }, [
    birthDate,
    firstName,
    lastName,
    yourCity,
    yourConfirmedPassword,
    yourCountry,
    yourEmail,
    yourPassword,
  ]);

  const saved = localStorage.getItem("saved");
  console.log("VALORES SALVOS LOCALSTORAGE: ", saved);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !firstName ? setErrorFirstName(true) : setErrorFirstName(false);
    !lastName ? setErrorLastName(true) : setErrorLastName(false);
    !birthDate ? setErrorBirthDate(true) : setErrorLastName(false);
    !yourCountry ? setErrorYourCountry(true) : setErrorLastName(false);
    !yourCity ? setErrorYourCity(true) : setErrorLastName(false);
    !yourEmail ? setErrorYourEmail(true) : setErrorLastName(false);
    !yourPassword ? setErrorYourPassword(true) : setErrorLastName(false);
    !yourConfirmedPassword
      ? setErrorYourConfirmedPassword(true)
      : setErrorLastName(false);
      if (
        !firstName ||
        !lastName ||
        birthDate ||
        !yourCountry ||
        !yourCity ||
        !yourEmail ||
        !yourPassword ||
        !yourConfirmedPassword
      ) {
        return;
      }
      if (!errorFirstName) {
        navigate("/login");
      }
  };

  return (
    <>
      <div>
        <S.title>Welcome,</S.title>
        <S.subtitle>Please, register to continue</S.subtitle>
      </div>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <Input
            labelTitle="first name"
            placeholder="Your first name"
            type="text"
            value={firstName}
            setValue={setFirstName}
            error={errorFirstName}
          />
          {errorFirstName ? <Error fieldname="first name" /> : null}
          <Input
            labelTitle="last name"
            placeholder="Your last name"
            type="text"
            value={lastName}
            setValue={setLastName}
            error={errorLastName}
          />
          {errorLastName ? <Error fieldname="last name" /> : null}
          <Input
            labelTitle="birth date"
            placeholder="MM/DD/YYYY"
            type="text"
            value={birthDate}
            setValue={setBirthDate}
            error={errorBirthDate}
          />
          {errorBirthDate ? <Error fieldname="last name" /> : null}
          <Input
            labelTitle="Country"
            placeholder="Your Country"
            type="text"
            value={yourCountry}
            setValue={setYourCountry}
            error={errorYourCountry}
          />
          {errorYourCountry ? <Error fieldname="last name" /> : null}
          <Input
            labelTitle="City"
            placeholder="Your City"
            type="text"
            value={yourCity}
            setValue={setYourCity}
            error={errorYourCity}
          />
          {errorYourCity ? <Error fieldname="last name" /> : null}
          <Input
            labelTitle="e-mail"
            placeholder="A valid e-mail here"
            type="email"
            value={yourEmail}
            setValue={setYourEmail}
            error={errorYourEmail}
          />
          {errorYourEmail ? <Error fieldname="last name" /> : null}
          <Input
            labelTitle="password"
            placeholder="Your password"
            type="password"
            value={yourPassword}
            setValue={setYourPassword}
            error={errorYourPassword}
          />
          {errorYourPassword ? <Error fieldname="last name" /> : null}
          <Input
            labelTitle="password"
            placeholder="Confirm your password"
            type="password"
            value={yourConfirmedPassword}
            setValue={setYourConfirmedPassword}
            error={errorYourConfirmedPassword}
          />
          {errorYourConfirmedPassword ? <Error fieldname="last name" /> : null}
        </S.InputContainer>

        <Button buttonName="Register now" />
        
      </S.Form>
    </>
  );
};
