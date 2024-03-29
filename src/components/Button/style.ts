import styled from "styled-components";
import theme from "../../styles/theme";

export const Button = styled.button`
  width: 508px;
  height: 38px;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    ${theme.colors.orange100} 0%,
    ${theme.colors.orange200} 100%
  );
  box-shadow: inset 5px 5px 15px ${theme.shadow.blackShadow2};
  border: none;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: ${theme.colors.white};
  cursor: pointer;
  height: 47px;
  margin-top: 5px;
`;
