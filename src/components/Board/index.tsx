import React from "react";
import { EventsApi } from "../../services/events-api";
import { responseProps } from "../../types";
import { formatHour } from "../../utils/date";
import * as S from "./style";

export const Board = () => {
  const [events, setEvents] = React.useState<responseProps[]>();
  const [day, setDay] = React.useState("sunday");

  React.useEffect(() => {
    EventsApi.get(day).then((res) => setEvents(res));
  }, [setEvents, day]);

  return (
    <>
      <S.Days>
        <S.Monday onClick={() => setDay("monday")}>Monday</S.Monday>
        <S.Tuesday onClick={() => setDay("tuesday")}>Tuesday</S.Tuesday>
        <S.Wednesday onClick={() => setDay("wednesday")}>Wednesday</S.Wednesday>
        <S.Thursday onClick={() => setDay("thursday")}>Thursday</S.Thursday>
        <S.Friday onClick={() => setDay("friday")}>Friday</S.Friday>
        <S.Saturday onClick={() => setDay("saturday")}>Saturday</S.Saturday>
        <S.Sunday onClick={() => setDay("sunday")}>Sunday</S.Sunday>
      </S.Days>
      {events &&
        events.map((event: responseProps) => (
          <S.ChartLine key={event._id}>
            <S.Time>{formatHour(event.createdAt)}</S.Time>
            <S.Desc>{event.description}</S.Desc>
          </S.ChartLine>
        ))}
    </>
  );
};
