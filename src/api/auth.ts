import { User } from "user";
import axiosInstance from "./axiosInstance";

export const signUp = async ({ email, password }: User) => {
  await axiosInstance.post("/auth/signup", {
    email,
    password,
  });
};

export const signIn = async ({ email, password }: User) => {
  const { data } = await axiosInstance.post<{ access_token: string }>(
    "/auth/signin",
    {
      email,
      password,
    }
  );

  return data;
};
