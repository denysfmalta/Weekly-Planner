import { errorProps } from "../../types";
import * as S from "./style";

export const Error = ({ fieldname }: errorProps) => {
  return <S.Paragraph>O campo "{fieldname}" é obrigatório</S.Paragraph>;
};
