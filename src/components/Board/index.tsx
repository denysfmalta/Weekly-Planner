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
      <div>
        <S.Monday>Monday</S.Monday>
        <S.Tuesday>Tuesday</S.Tuesday>
        <S.Wednesday>Wednesday</S.Wednesday>
        <S.Thursday>Thursday</S.Thursday>
        <S.Friday>Friday</S.Friday>
        <S.Saturday>Saturday</S.Saturday>
        <S.Sunday>Sunday</S.Sunday>
      </div>
      {events &&
        events.map((event: responseProps) => (
          <li key={event._id}>{event.description}</li>
        ))}
    </>
  );
};
