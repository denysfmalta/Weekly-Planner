import styled from "styled-components";
import theme from "../../styles/theme";

export const Header = styled.header`
  height: 130px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 23px;
`;

export const TitleContainer = styled.div`
  background-color: ${theme.colors.black};
  width: 400px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 24px;
  border-radius: 0px 14px 15px 0px;
`;
export const H1 = styled.h1`
  color: ${theme.colors.white};
  font-size: 22px;
  font-size: 22px;
  line-height: 20px;
`;

export const Subtitle = styled.p`
  color: ${theme.colors.white};
  font-size: 12px;
  font-size: 12x;
  line-height: 20px;
`;

export const TimerContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivTime = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 20px;
  color: ${theme.colors.gray300};
  margin-bottom: 12px;
`;

export const DivDate = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: ${theme.colors.gray300};
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.black800};
`;

export const weather = styled.div`
  display: flex;
  align-items: center;
`;

export const img = styled.img``;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  margin-left: 12px;
  color: ${theme.colors.black800};
`;

export const LogoutContainer = styled.div`
  width: 176px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
`;
export const LogoutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 26px;
`;
export const LogoutButton = styled.button`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${theme.colors.black};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
