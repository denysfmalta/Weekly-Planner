import { Outlet } from 'react-router-dom'
import * as S from './style'
import logo from "../../assets/compass-logo.png";

export const Home = () => {

    return (
        <S.Page>
        <S.textContainer>
          
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