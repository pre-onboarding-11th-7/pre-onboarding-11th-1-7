import useMutation from "../useMutation";
import { createTodo } from "../../api/todo";

type CreateTodoRequest = Parameters<typeof createTodo>[0];
type CreateTodoResponse = Awaited<ReturnType<typeof createTodo>> | null;

interface UseTodoCreationOption {
  onSuccess?: (todo: CreateTodoResponse) => void;
}

const useTodoCreation = ({ onSuccess }: UseTodoCreationOption) => {
  const { mutate } = useMutation<CreateTodoResponse, CreateTodoRequest>({
    mutationFunc: async (todo) => {
      if (todo === "") {
        alert("할 일을 입력해주세요.");
        return null;
      }

      return createTodo(todo);
    },

    onSuccess: (todo) => {
      if (onSuccess) {
        onSuccess(todo);
      }
    },
  });

  return mutate;
};

export default useTodoCreation;
