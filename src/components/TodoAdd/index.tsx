import { FormEvent, useRef } from "react";
import useTodoCreation from "../../hooks/services/useTodoCreation";

export default function TodoAdd() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addTodo = useTodoCreation({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }
    await addTodo(inputRef.current.value);
    inputRef.current.value = "";
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
