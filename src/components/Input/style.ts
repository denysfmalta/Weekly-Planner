import styled from "styled-components";
import theme from "../../styles/theme";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const Input = styled.input.attrs((props: { erro: boolean }) => props)`
  max-width: 379px;
  width: 379px;
  height: 60px;
  background: ${theme.colors.black700};
  border: 1px solid
    ${(props) => (props.erro ? theme.colors.yellow : theme.colors.white)};
  border-radius: 50px;
  color: ${theme.colors.white};
  padding-left: 23px;

  &::placeholder {
    font-size: 12px;
    color: ${theme.colors.white200};
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.white200};
  margin-right: 17px;
`;
