import styled from "styled-components";
import theme from "../../styles/theme";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Input = styled.input`
  max-width: 379px;
  width: 100%;
  height: 40px;
  background: ${theme.colors.black700};
  border: 1px solid ${theme.colors.white};
  border-radius: 50px;
  color: ${theme.colors.white};

  &::placeholder {
    font-size: 12px;
    color: ${theme.colors.white200};
    padding-left: 23px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.white200};
  margin-right: 17px;
`;
