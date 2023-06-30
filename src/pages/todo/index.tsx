import { Todo } from "todo";
import TodoCard from "../../components/TodoCard";
import useTodoList from "../../hooks/services/useTodoList";

export default function TodoPage() {
  type Data = {
    todoList: Todo[] | undefined;
    refetch: () => Promise<void>;
  };
  const data: Data = useTodoList();
  console.log(data);

  return (
    <>
      <div>Todo List</div>

      <section>
        {data.todoList &&
          data.todoList.map((list) => <TodoCard key={list.id} data={list} />)}
      </section>
    </>
  );
}
