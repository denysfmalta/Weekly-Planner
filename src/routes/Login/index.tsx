import React from "react";

export const Login = () => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    const data = localStorage.getItem("userData");
    const user = JSON.parse(data!);
    setUser(user);
  }, []);
  console.log(user);

  //console.log("VALORES SALVOS LOCALSTORAGE: ", users);

  return <div>Pagina de Login</div>;
};
