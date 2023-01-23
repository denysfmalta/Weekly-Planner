import React from "react";
import { UserContextProps } from "../types";



export const UserContext = React.createContext<UserContextProps>({
  contextUser: "",
  setContextUser: () => {}
});
