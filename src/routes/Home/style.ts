import styled from "styled-components";
import theme from "../../styles/theme";
import img from "../../assets/image-2.png";

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
