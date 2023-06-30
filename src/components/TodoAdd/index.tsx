import { FormEvent, useRef } from "react";
import useTodoCreation from "../../hooks/services/useTodoCreation";
import { Props } from "../TodoList";

export default function TodoAdd({ refetch }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addTodo = useTodoCreation({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }
    await addTodo(inputRef.current.value);
    inputRef.current.value = "";
    refetch();
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit" aria-label="추가">
        추가
      </button>
    </form>
  );
}
