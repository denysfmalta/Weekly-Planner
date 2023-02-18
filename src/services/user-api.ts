import axios from "axios";
import { createData, userLog } from "./api-types";

export const UserApi = {
  SingUp: async (data: createData) => {
    const response = await axios.post(
      `https://latam-challenge-2.deta.dev/api/v1/users/sign-up`,
      data
    );

    return response;
  },

  SingIn: async (data: userLog) => {
    const response = await axios.post(
      `https://latam-challenge-2.deta.dev/api/v1/users/sign-in`,
      data
    );

    return response;
  },
};
