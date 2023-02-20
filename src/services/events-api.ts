import axios from "axios";
import { eventData } from "./api-types";

//const token = JSON.parse(localStorage.getItem("token") || "");
// aqui, a token salva em localStorage está desativada devido a um problema
// que estava ocasionando para rodar a aplicação no meu computador Linux. testei em
// um windows e funcionava corretamente dessa forma.
const config = {
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwZWM4N2RhZTEzOGFmMWRjOGI1OGQiLCJpYXQiOjE2NzY5MDQ0NTksImV4cCI6MTY3Njk0MDQ1OX0.iKGZ0OTrv4d0guEJsqUm5XoT-Zmp4vbcrevpLa5Ck_g"}`,
  },
};

export const EventsApi = {
  get: async (day: string) => {
    const response = await axios.get(
      `https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${day}`,
      config
    );

    return response.data.events;
  },

  post: async (event: eventData) => {
    const response = axios.post(
      `https://latam-challenge-2.deta.dev/api/v1/events`,
      event,
      config
    );

    return response;
  },

  deleteAll: async (day: string) => {
    const response = axios.delete(
      `https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${day}`,
      config
    );
    return response;
  },
};
