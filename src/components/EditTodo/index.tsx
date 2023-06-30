import React, { useState } from "react";
import { refetch } from "../TodoCard";
import { Todo } from "todo";
import { EditTodoResponse } from "../../hooks/services/useTodoEdit";

interface editTodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  editModeChange: () => void;
  mutate: (
    variables: Omit<Todo, "userId">
  ) => Promise<EditTodoResponse | undefined>;
}
const EditTodo = ({
  id,
  todo,
  editModeChange,
  isCompleted,
  refetch,
  mutate,
}: editTodo & refetch) => {
  const [content, setContent] = useState(todo);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const submitInput = async () => {
    const result = await mutate({ id, todo: content, isCompleted });

    if (result) {
      refetch();
      editModeChange();
    }
  };

  return (
    <>
      <input
        data-testid="modify-input"
        value={content}
        onChange={changeInput}
      />
      <button data-testid="submit-button" onClick={submitInput}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={editModeChange}>
        취소
      </button>
    </>
  );
};

export default EditTodo;
