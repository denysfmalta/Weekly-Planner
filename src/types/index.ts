export type inputProps = {
  labelTitle: string;
  placeholder: string;
  type: string;
  value: string;
  setValue: any;
  error: boolean;
};

export type buttonProps = {
  buttonName: string
};

export type errorProps = {
  fieldname: string
}

export type homeProps = {
  subtitle: string
}
export type providerProps = {
  value: string;
}

export type UserContextProps = {
  contextUser: string 
  setContextUser: (contextUser: string) => void
}

export type PasswordContextProps = {
  passwordContext: string
  setContextPassword: (passwordContex: string) => void
}

export type AuthProps = {
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
}