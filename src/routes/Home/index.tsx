import { Outlet } from 'react-router-dom'
import * as S from './style'
import logo from "../../assets/compass-logo.png";

export const Home = () => {

    return (
        <S.Page>
        <S.textContainer>
          <div>
            <S.title>Welcome,</S.title>
            <S.subtitle>Please, register to continue</S.subtitle>
          </div>
            <Outlet />
        </S.textContainer>
        <S.imageContainer>
          <S.background>
            <S.logo src={logo} />
          </S.background>
        </S.imageContainer>
      </S.Page>
    )
}