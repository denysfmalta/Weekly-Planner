import axios from "axios";

//const token = JSON.parse(localStorage.getItem("token") || "");

const config = {
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwZWM4N2RhZTEzOGFmMWRjOGI1OGQiLCJpYXQiOjE2NzY3NDc4NDgsImV4cCI6MTY3Njc4Mzg0OH0.HKj-md0uL1CfXl-nwVXGdKHsOa8YSObiKWPUj1n0gqA"}`,
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
};
