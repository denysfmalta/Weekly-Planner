import { Outlet } from "react-router-dom";
import { Board } from "../Board";
import * as S from "./style";

export const ActionSection = () => {
  return (
    <>
      <S.Box>
        <div>
          <S.Input type="text"></S.Input>
          <S.Day name="day" id="day">
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </S.Day>
          <S.Hour name="hours">
            <option value="10:00">10:00</option>
          </S.Hour>
        </div>
        <div>
          <S.Add>+ Add to calendar</S.Add>
          <S.Delete>- Delete all</S.Delete>
        </div>
      </S.Box>
      <Board />
    </>
  );
};
