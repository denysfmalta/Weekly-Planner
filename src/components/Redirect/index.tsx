import { useNavigate } from "react-router-dom";
import { returnProps } from "../../types";
import * as S from "./style";

export const Redirect = ({ route, text, textLink }: returnProps) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${route}`);
  }
  return (
    <S.Paragraph>
      {text} <S.Link onClick={handleClick}>{textLink}</S.Link>
    </S.Paragraph>
  );
};
