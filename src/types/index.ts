export type inputProps = {
  labelTitle?: string;
  placeholder: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  error: boolean;
};

export type buttonProps = {
  buttonName: string;
};

export type errorProps = {
  fieldname: string;
};

export type UserContextProps = {
  contextUser: string;
  setContextUser: (contextUser: string) => void;
};

export type PasswordContextProps = {
  passwordContext: string;
  setContextPassword: (passwordContex: string) => void;
};

export type AuthProps = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

export type returnProps = {
  route: string;
  text: string;
  textLink: string;
};

export type responseProps = {
  _id: string;
  userId: string;
  updatedAt: string;
  description: string;
  daysOfWeek: string;
  createdAt: string;
};

export type BoardProps = {
  events: responseProps[]
  setEvents: (value: responseProps[]) => void
  daysOfWeek: string
  setDaysOfWeek: (value: string) => void
}
