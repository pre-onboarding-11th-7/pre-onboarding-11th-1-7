import useMutation from "../useMutation";
import { deleteTodo } from "../../api/todo";

type DeleteTodoRequest = Parameters<typeof deleteTodo>[0];

interface UseTodoDeletionOption {
  onSuccess?: () => void;
}

const useTodoDeletion = ({ onSuccess }: UseTodoDeletionOption) => {
  const { mutate } = useMutation<void, DeleteTodoRequest>({
    mutationFunc: async (id) => deleteTodo(id),

    onSuccess: () => {
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  return mutate;
};

export default useTodoDeletion;
