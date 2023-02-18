import styled from "styled-components";
import theme from "../../styles/theme";

export const Paragraph = styled.p`
  font-size: 10px;
  color: ${theme.colors.white};
  text-align: center;
  margin-top: 5px;
`;

export const Link = styled.a`
  cursor: pointer;
  color: ${theme.colors.yellow};
  font-size: 10px;
`;
