import { buttonProps } from "../../types";
import * as S from "./style";

export const Button = ({ buttonName }: buttonProps) => {
  return <S.Button>{buttonName}</S.Button>;
};
