import React from "react";
import { EventsApi } from "../../services/events-api";
import { responseProps } from "../../types";
import { Board } from "../Board";
import * as S from "./style";

export const ActionSection = () => {
  const [description, setDescription] = React.useState("");
  const [dayOfWeek, setDayOfWeek] = React.useState("monday");
  const [events, setEvents] = React.useState<responseProps[]>([]);

  const handleAddEvent = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const eventData = {
        description,
        dayOfWeek,
      };

      EventsApi.post(eventData)
        .then(() => EventsApi.get(dayOfWeek))
        .then((res) => setEvents(res))
        .catch((error) => {
          const { errors } = error.response.data;

          errors.forEach((err: string) => {
            alert(err);
          });
        });
    },
    [dayOfWeek, description]
  );

  const handleDeleteAll = React.useCallback(() => {
    EventsApi.deleteAll(dayOfWeek).then((res) =>
      EventsApi.get(dayOfWeek).then((res) => setEvents(res))
    );
  }, [dayOfWeek]);

  return (
    <>
      <S.Box>
        <div>
          <S.Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></S.Input>
          <S.Day
            name="day"
            id="day"
            value={dayOfWeek}
            onChange={(e) => setDayOfWeek(e.target.value)}
          >
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </S.Day>
          <S.Hour name="hours">
            <option value="10:00">10:00</option>
          </S.Hour>
        </div>
        <div>
          <S.Add onClick={(e) => handleAddEvent(e)}>+ Add to calendar</S.Add>
          <S.Delete onClick={handleDeleteAll}>- Delete all</S.Delete>
        </div>
      </S.Box>
      <Board
        events={events}
        setEvents={setEvents}
        daysOfWeek={dayOfWeek}
        setDaysOfWeek={setDayOfWeek}
      />
    </>
  );
};
