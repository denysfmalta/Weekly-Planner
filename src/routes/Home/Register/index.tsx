import React from "react";
import { Button, Error } from "../../../components";
import { Input } from "../../../components";
import { PasswordContext } from "../../../contexts/passwordContext";
import { UserContext } from "../../../contexts/userContext";
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

  const { setContextUser } = React.useContext(UserContext);
  const { setContextPassword } = React.useContext(PasswordContext);

  React.useEffect(() => {
    localStorage.setItem(
      "userData",
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

    setContextUser(yourEmail);
    setContextPassword(yourPassword);
  }, [
    birthDate,
    firstName,
    lastName,
    setContextPassword,
    setContextUser,
    yourCity,
    yourConfirmedPassword,
    yourCountry,
    yourEmail,
    yourPassword,
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !firstName ? setErrorFirstName(true) : setErrorFirstName(false);
    !lastName ? setErrorLastName(true) : setErrorLastName(false);
    !birthDate ? setErrorBirthDate(true) : setErrorBirthDate(false);
    !yourCountry ? setErrorYourCountry(true) : setErrorYourCountry(false);
    !yourCity ? setErrorYourCity(true) : setErrorYourCity(false);
    !yourEmail ? setErrorYourEmail(true) : setErrorYourEmail(false);
    !yourPassword ? setErrorYourPassword(true) : setErrorYourPassword(false);
    !yourConfirmedPassword
      ? setErrorYourConfirmedPassword(true)
      : setErrorYourConfirmedPassword(false);
  };

  return (
    
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
              placeholder="Your first name"
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
            {errorBirthDate ? <Error fieldname="birth date" /> : null}
            <Input
              labelTitle="Country"
              placeholder="Your Country"
              type="text"
              value={yourCountry}
              setValue={setYourCountry}
              error={errorYourCountry}
            />
            {errorYourCountry ? <Error fieldname="Country" /> : null}
            <Input
              labelTitle="City"
              placeholder="Your City"
              type="text"
              value={yourCity}
              setValue={setYourCity}
              error={errorYourCity}
            />
            {errorYourCity ? <Error fieldname="City" /> : null}
            <Input
              labelTitle="e-mail"
              placeholder="A valid e-mail here"
              type="email"
              value={yourEmail}
              setValue={setYourEmail}
              error={errorYourEmail}
            />
            {errorYourEmail ? <Error fieldname="e-mail" /> : null}
            <Input
              labelTitle="password"
              placeholder="Your password"
              type="password"
              value={yourPassword}
              setValue={setYourPassword}
              error={errorYourPassword}
            />
            {errorYourPassword ? <Error fieldname="password" /> : null}
            <Input
              labelTitle="password"
              placeholder="Confirm your password"
              type="password"
              value={yourConfirmedPassword}
              setValue={setYourConfirmedPassword}
              error={errorYourConfirmedPassword}
            />
            {errorYourConfirmedPassword ? <Error fieldname="password" /> : null}
          </S.InputContainer>
          <Button buttonName="Register now" />
        </S.Form>
  );
};
