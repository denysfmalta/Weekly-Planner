import styled from "styled-components";
import theme from "../../styles/theme";

export const Input = styled.input`
  width: 379px;
  height: 60px;
  background: ${theme.colors.black700};
  border: 1px solid ${theme.colors.white};
  border-radius: 50px;
  margin-bottom: 18px;

  &::placeholder {
    font-size: 12px;
    color: ${theme.colors.white200};
    padding: 23px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.white200};
  margin-right: 17px;
`;