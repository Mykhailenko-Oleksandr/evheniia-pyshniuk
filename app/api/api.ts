import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{
  error: string;
  response: {
    message: string;
    validation: { body: { message: string } };
  };
}>;

export const api = axios.create({
  baseURL: "https://yevheniia-pyshniuk-api.onrender.com/api",
  withCredentials: true,
});
