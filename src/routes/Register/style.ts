import styled from "styled-components";
import img from "../../assets/image.png";
import theme from "../../styles/theme";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const textContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-left: 296px;
  background: linear-gradient(
    180deg,
    ${theme.colors.lightGray} 0%,
    ${theme.colors.darkGray} 100%
  );
  box-shadow: 4px 4px 70px ${theme.shadow.blackShadow};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const title = styled.h1`
  font-family: Mulish;
  text-align: start;
  font-weight: 400;
  font-size: 60px;
  line-height: 75px;
  color: ${theme.colors.white200};
`;

export const subtitle = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.white200};
`;

export const imageContainer = styled.div`
  width: 100%;
`;

export const logo = styled.img`
  width: auto;
  height: auto;
  z-index: 1;
`;

export const background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${img});
`;