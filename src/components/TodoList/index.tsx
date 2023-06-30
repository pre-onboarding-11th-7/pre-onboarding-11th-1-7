import React from "react";
import useTodoList from "../../hooks/services/useTodoList";
import TodoCard from "../TodoCard";

const TodoList = () => {
  const { todoList, refetch } = useTodoList();

  return (
    <div>
      {todoList ? (
        todoList.map(({ id, todo, isCompleted, userId }) => (
          <TodoCard
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            userId={userId}
            refetch={refetch}
          />
        ))
      ) : (
        <div>목록이 비었습니다</div>
      )}
    </div>
  );
};

export default TodoList;
