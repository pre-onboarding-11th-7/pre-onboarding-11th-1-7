import { useState } from "react";
import { Todo } from "todo";
import EditTodo from "../EditTodo";
import useTodoDeletion from "../../hooks/services/useTodoDeletion";
import useTodoEdit from "../../hooks/services/useTodoEdit";

export interface refetch {
  refetch: () => void;
}
export default function TodoCard({
  id,
  todo,
  isCompleted,
  refetch,
}: Todo & refetch) {
  const deleteCard = useTodoDeletion({ ...refetch });
  const [isEditMode, setIsEditMode] = useState(false);

  const editModeChange = () => {
    setIsEditMode((pre) => !pre);
  };
  const mutate = useTodoEdit({ ...editModeChange });

  const deleteTodo = async () => {
    await deleteCard(id);
    refetch();
  };
  const handleCheckBox = async () => {
    await mutate({ id, todo, isCompleted: !isCompleted });
    refetch();
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckBox}
        />
      </label>
      {isEditMode ? (
        <EditTodo
          id={id}
          todo={todo}
          editModeChange={editModeChange}
          isCompleted={isCompleted}
          refetch={refetch}
          mutate={mutate}
        />
      ) : (
        <>
          <span>{todo}</span>
          <button data-testid="modify-button" onClick={editModeChange}>
            수정
          </button>
          <button data-testid="delete-button" onClick={deleteTodo}>
            삭제
          </button>
        </>
      )}
    </li>
  );
}
