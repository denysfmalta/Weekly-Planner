import styled from "styled-components";
import theme from "../../../styles/theme";

export const Form = styled.form`
  width: auto;
`;

export const InputContainer = styled.div`
  width: 507px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const title = styled.h1`
  font-family: Mulish;
  text-align: start;
  font-weight: 400;
  font-size: 48px;
  line-height: 75px;
  color: ${theme.colors.white200};
  height: 75px;
  width: 273px;
  margin-right: 266px;
  margin-top: 4px;
`;

export const subtitle = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.white200};
  margin-bottom: 22px;
  margin-right: 366px;
`;
