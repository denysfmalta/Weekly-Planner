import axios from "axios";
import { createData } from "./api-types";

export const UserApi = {
  SingUp: async (data: createData) => {
    const response = await axios.post(
      `https://latam-challenge-2.deta.dev/api/v1/users/sign-up`,
      data
    );

    return response;
  },

  SingIn: () => {

  },
};

// POST --> salva um novo dado no servidor
// GET --> busca os dados salvos no servidor
// PUT --> Atualiza  / PATCH
// DELETE --> apaga o registro no servidor
/* 
    id: 3,
    nome: denys
    sobrenome: dlommer
    profissao: estagiario

*/

/*
    ENTENDER A DIFERENÇA (COMO USA) ENTRE ASYNC/AWAIT E PROMISE
*/
