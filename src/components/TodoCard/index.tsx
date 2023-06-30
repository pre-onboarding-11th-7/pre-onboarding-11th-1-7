import { useState } from "react";
import { Todo } from "todo";
import EditTodo from "../EditTodo";

export default function TodoCard({ id, todo, isCompleted }: Todo) {
  const [isEditMode, setIsEditMode] = useState(false);

  const editModeChange = () => {
    setIsEditMode((pre) => !pre);
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
        />
      ) : (
        <>
          <span>{todo}</span>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </>
      )}
    </li>
  );
}
