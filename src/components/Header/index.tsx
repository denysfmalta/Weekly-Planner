import React from "react";
import * as S from "./style";
import { getFullDate, getHour } from "../../utils/date";
import cloudy from "../../assets/cloudy.svg";
import logo from "../../assets/logo-dark.svg";
import arrow from "../../assets/arrow-left.svg";

export const Header = () => {
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    setDate(getFullDate());
    setInterval(() => {
      setTime(getHour());
    }, 1000);
  }, []);

  return (
    <S.Header>
      <S.Nav>
        <S.TitleContainer>
          <S.H1>Weekly Planner</S.H1>
          <S.Subtitle>Use this planner to organize yout daily</S.Subtitle>
        </S.TitleContainer>

        <S.TimerContainer>
          <S.DivTime>{time}</S.DivTime>
          <S.DivDate>{date}</S.DivDate>
        </S.TimerContainer>

        <S.WeatherContainer>
          <S.Div>Franca, Brasil</S.Div>

          <S.weather>
            <S.img src={cloudy} />
            <S.Paragraph>22º</S.Paragraph>
          </S.weather>
        </S.WeatherContainer>

        <S.LogoutContainer>
          <S.img src={logo} />
          <S.LogoutContent>
            <S.img src={arrow} />
            <S.LogoutButton>Logout</S.LogoutButton>
          </S.LogoutContent>
        </S.LogoutContainer>
      </S.Nav>
    </S.Header>
  );
};
