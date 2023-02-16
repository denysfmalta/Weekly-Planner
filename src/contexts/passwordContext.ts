import React from "react";
import { PasswordContextProps } from "../types";

export const PasswordContext = React.createContext<PasswordContextProps>({
  passwordContext: "",
  setContextPassword: (passwordContext) => {},
});
