import axios from "axios";

const BASE_URL = "https://flipzon-be.herokuapp.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDJkMjE4ZGE1ODdmZTUwMmQ0MGQwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU0NjQ1NywiZXhwIjoxNjQ4ODA1NjU3fQ.EoDkz3AsEfAKqUtp3RpzYzE4ed3NN7tg7GhuCrRutis";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
