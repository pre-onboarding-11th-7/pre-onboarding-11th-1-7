import { Todo } from "todo";

interface dataProps {
  data: Todo;
}

export default function TodoCard({ data }: dataProps) {
  return (
    <div>
      <div>{data.todo}</div>
    </div>
  );
}
