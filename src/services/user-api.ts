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

SignIn: () => {

  },
};