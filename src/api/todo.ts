import { Todo } from "todo";
import axiosInstance from "./axiosInstance";

export const createTodo = async (todo: string) => {
  const { data } = await axiosInstance.post<Todo>("/todos", { todo });
  return data;
};

export const updateTodo = async ({
  id,
  todo,
  isCompleted,
}: Omit<Todo, "userId">) => {
  const { data } = await axiosInstance.put<Todo>(`/todos/${id}`, {
    todo,
    isCompleted,
  });

  return data;
};

export const deleteTodo = async (id: number) => {
  await axiosInstance.delete(`/todos/${id}`);
};

export const getTodoList = async () => {
  const { data } = await axiosInstance.get<Todo[]>("/todos");
  return data;
};
