import React from "react";
import { EventsApi } from "../../services/events-api";
import { responseProps } from "../../types";
import * as S from "./style";

export const Board = () => {
  const [events, setEvents] = React.useState<responseProps[]>();
  const [day, setDay] = React.useState("sunday")

  React.useEffect(() => {
    EventsApi.get(day).then((res) => setEvents(res));
  }, [setEvents, day]);


  return (
    <>
      <S.Days>
        <S.Monday>Monday</S.Monday>
        <S.Tuesday>Tuesday</S.Tuesday>
        <S.Wednesday>Wednesday</S.Wednesday>
        <S.Thursday>Thursday</S.Thursday>
        <S.Friday>Friday</S.Friday>
        <S.Saturday>Saturday</S.Saturday>
        <S.Sunday>Sunday</S.Sunday>
      </S.Days>
      {events &&
        events.map((event: responseProps) => (
          <S.ChartLine key={event._id}>
            <S.Time>{event.createdAt}</S.Time>
            <S.Desc>{event.description}</S.Desc>
            <S.Desc>{event.description}</S.Desc>
          </S.ChartLine>
        ))}
    </>
  );
};
