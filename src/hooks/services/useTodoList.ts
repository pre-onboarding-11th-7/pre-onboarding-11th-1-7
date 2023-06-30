import { useCallback } from "react";
import { Todo } from "todo";
import useQuery from "../useQuery";
import { getTodoList } from "../../api/todo";

const useTodoList = () => {
  const queryFunc = useCallback(async () => {
    return getTodoList();
  }, []);

  const { data, refetch } = useQuery<Todo[]>({ queryFunc });

  return { todoList: data, refetch };
};

export default useTodoList;
