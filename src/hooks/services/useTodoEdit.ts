import useMutation from "../useMutation";
import { updateTodo } from "../../api/todo";

type EditTodoRequest = Parameters<typeof updateTodo>[0];
type EditTodoResponse = Awaited<ReturnType<typeof updateTodo>> | null;

interface UseTodoEditOption {
  onSuccess?: (todo: EditTodoResponse) => void;
}

const useTodoEdit = ({ onSuccess }: UseTodoEditOption) => {
  const { mutate } = useMutation<EditTodoResponse, EditTodoRequest>({
    mutationFunc: async ({ id, todo, isCompleted }) => {
      if (todo === "") {
        alert("할 일을 입력해주세요.");
        return null;
      }

      return updateTodo({ id, todo, isCompleted });
    },

    onSuccess: (todo) => {
      if (onSuccess && todo) {
        onSuccess(todo);
      }
    },
  });

  return mutate;
};

export default useTodoEdit;
