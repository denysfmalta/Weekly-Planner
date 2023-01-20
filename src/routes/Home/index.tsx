import * as S from "./Login/style"
import logo from "../../assets/compass-logo.png"
import { Outlet } from "react-router-dom"

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