import { useState } from "react";
import { Todo } from "todo";
import EditTodo from "../EditTodo";
import useTodoDeletion from "../../hooks/services/useTodoDeletion";

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

  const deleteTodo = async () => {
    await deleteCard(id);
    refetch();
  };
  return (
    <li>
      <label>
        <input type="checkbox" />
      </label>
      {isEditMode ? (
        <EditTodo
          id={id}
          todo={todo}
          editModeChange={editModeChange}
          isCompleted={isCompleted}
          refetch={refetch}
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
