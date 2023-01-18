import styled from "styled-components";
import img from "../../assets/image-2.png";
import theme from "../../styles/theme";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
`;

export const textContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${theme.colors.gray100} 0%,
    ${theme.colors.gray200} 100%
  );
  box-shadow: 4px 4px 70px ${theme.shadow.blackShadow};
`;

export const Form = styled.form`
  width: auto;
`;

export const InputContainer = styled.div`
  width: 472px;
  height: 531px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const title = styled.h1`
  font-family: Mulish;
  text-align: start;
  font-weight: 400;
  font-size: 54px;
  line-height: 75px;
  color: ${theme.colors.white200};

`;

export const subtitle = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.white200};
  margin-bottom: 27px;
`;

export const imageContainer = styled.div`
  width: 50%;
`;

export const logo = styled.img`
  padding-top: 48px;
  width: 484px;
  height: 66px;
`;

export const background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
  background-image: url(${img});
  background-size: cover;
  background-position: cover;
  background-repeat: no-repeat;
`;
