import { buttonProps } from "../../types";
import * as S from "./style";

export const Button = ({ buttonName}: buttonProps) => {
  return <S.Button type="submit" >{buttonName}</S.Button>;
};
