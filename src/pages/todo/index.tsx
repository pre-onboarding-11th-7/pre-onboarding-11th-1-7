import TodoAdd from "../../components/TodoAdd";
import TodoList from "../../components/TodoList";
import useTodoList from "../../hooks/services/useTodoList";

export default function TodoPage() {
  const { todoList, refetch } = useTodoList();

  return (
    <>
      <TodoAdd refetch={refetch} />
      <TodoList todoList={todoList} refetch={refetch} />
    </>
  );
}
