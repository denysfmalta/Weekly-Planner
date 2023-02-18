import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Error } from "../../../components";
import { Input } from "../../../components";
import { Redirect } from "../../../components/Redirect";
import { PasswordContext } from "../../../contexts/passwordContext";
import { UserContext } from "../../../contexts/userContext";
import { UserApi } from "../../../services/user-api";
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

  const navigate = useNavigate();

  const handleSubmit = React.useCallback(
    async (e?: React.FormEvent<HTMLFormElement>) => {
      e!.preventDefault();

      try {
        if (
          !firstName ||
          !lastName ||
          !birthDate ||
          !yourCountry ||
          !yourCity ||
          !yourEmail ||
          !yourPassword ||
          !yourConfirmedPassword
        ) {
          !firstName ? setErrorFirstName(true) : setErrorFirstName(false);
          !lastName ? setErrorLastName(true) : setErrorLastName(false);
          !birthDate ? setErrorBirthDate(true) : setErrorBirthDate(false);
          !yourCountry ? setErrorYourCountry(true) : setErrorYourCountry(false);
          !yourCity ? setErrorYourCity(true) : setErrorYourCity(false);
          !yourEmail ? setErrorYourEmail(true) : setErrorYourEmail(false);
          !yourPassword
            ? setErrorYourPassword(true)
            : setErrorYourPassword(false);
          !yourConfirmedPassword
            ? setErrorYourConfirmedPassword(true)
            : setErrorYourConfirmedPassword(false);

          return;
        }

        const data = {
          firstName,
          lastName,
          birthDate,
          city: yourCity,
          country: yourCountry,
          email: yourEmail,
          password: yourPassword,
          confirmPassword: yourConfirmedPassword,
        };

        UserApi.SingUp(data)
          .then((response) => {
            if (response.status === 201) {
              alert("usuário cadastrado");
              navigate("/");
            }
          })
          .catch((error) => {
            console.log(error);
          });

        setContextUser(yourEmail);
        setContextPassword(yourPassword);
      } catch (e) {}
    },
    [
      birthDate,
      firstName,
      lastName,
      navigate,
      setContextPassword,
      setContextUser,
      yourCity,
      yourConfirmedPassword,
      yourCountry,
      yourEmail,
      yourPassword,
    ]
  );

  React.useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <>
      <S.title>Welcome,</S.title>
      <S.subtitle>Please, register to continue</S.subtitle>

      <S.Form onSubmit={(e) => handleSubmit(e)}>
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

          <Button buttonName="Register now" />
          <Redirect
            text="Already have an account?"
            route="/"
            textLink="Click here to login"
          />
        </S.InputContainer>
      </S.Form>
    </>
  );
};
