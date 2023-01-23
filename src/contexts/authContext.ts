import React from "react"
import { AuthProps } from "../types"

export const AuthContext = React.createContext<AuthProps>({
    isAuth: false,
    setIsAuth: (isAuth) => {}
})