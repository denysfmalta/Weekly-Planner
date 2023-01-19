import React from "react";
import logo from "../../assets/compass-logo.png";
import { Button, Error } from "../../components";
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

  const [errorFirstName, setErrorFirstName] = React.useState(false);
  const [errorLastName, setErrorLastName] = React.useState(false);


  React.useEffect(() => {
    const storedData = {
      firstName: firstName,
      lastName: lastName,
    };

    localStorage.setItem("saved", JSON.stringify(storedData));
  }, [firstName, lastName]);

  const saved = localStorage.getItem("saved");
  console.log("VALORES SALVOS LOCALSTORAGE: ", saved);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !firstName ? setErrorFirstName(true) : setErrorFirstName(false);
    !lastName ? setErrorLastName(true) : setErrorLastName(false);
  };

  return (
    <S.Page>
      <S.textContainer>
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
              placeholder="Your first name"
              type="text"
              value={lastName}
              setValue={setLastName}
              error={errorLastName}
            />
            {errorLastName ? <Error fieldname="last name" /> : null}
           {/*  <Input
              labelTitle="birth date"
              placeholder="MM/DD/YYYY"
              type="text"
              value={birthDate}
              setValue={setBirthDate}
              error={error}
            />
            <Input
              labelTitle="Country"
              placeholder="Your Country"
              type="text"
              value={yourCountry}
              setValue={setYourCountry}
              error={error}
            />
            <Input
              labelTitle="City"
              placeholder="Your City"
              type="text"
              value={yourCity}
              setValue={setYourCity}
              error={error}
            />
            <Input
              labelTitle="e-mail"
              placeholder="A valid e-mail here"
              type="email"
              value={yourEmail}
              setValue={setYourEmail}
              error={error}
            />
            <Input
              labelTitle="password"
              placeholder="Your password"
              type="password"
              value={yourPassword}
              setValue={setYourPassword}
              error={error}
            />
            <Input
              labelTitle="password"
              placeholder="Confirm your password"
              type="password"
              value={yourConfirmedPassword}
              setValue={setYourConfirmedPassword}
              error={error}
            /> */}
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
