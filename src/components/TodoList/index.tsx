import { Todo } from "todo";
import TodoCard from "../TodoCard";
export interface Props {
  todoList?: Todo[] | undefined;
  refetch: () => Promise<void>;
}

const TodoList = ({ todoList, refetch }: Props) => {
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
