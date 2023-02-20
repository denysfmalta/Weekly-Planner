import React from "react";
import { EventsApi } from "../../services/events-api";
import { BoardProps, responseProps } from "../../types";
import { formatHour } from "../../utils/date";
import * as S from "./style";

export const Board = ({
  events,
  setEvents,
  daysOfWeek,
  setDaysOfWeek,
}: BoardProps) => {
  React.useEffect(() => {
    EventsApi.get(daysOfWeek).then((res) => setEvents(res));
  }, [setEvents, daysOfWeek]);

  return (
    <>
      <S.Days>
        <S.Monday onClick={() => setDaysOfWeek("monday")}>Monday</S.Monday>
        <S.Tuesday onClick={() => setDaysOfWeek("tuesday")}>Tuesday</S.Tuesday>
        <S.Wednesday onClick={() => setDaysOfWeek("wednesday")}>
          Wednesday
        </S.Wednesday>
        <S.Thursday onClick={() => setDaysOfWeek("thursday")}>
          Thursday
        </S.Thursday>
        <S.Friday onClick={() => setDaysOfWeek("friday")}>Friday</S.Friday>
        <S.Saturday onClick={() => setDaysOfWeek("saturday")}>
          Saturday
        </S.Saturday>
        <S.Sunday onClick={() => setDaysOfWeek("sunday")}>Sunday</S.Sunday>
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
