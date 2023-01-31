import Link from 'next/link';

const fetchTodos = async (): Promise<TToDo[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

const TodoList = async () => {
  const todos = await fetchTodos();

  return (
    <div>
      {todos.map(({ id, title }) => (
        <p key={id}>
          <Link href={`/todos/${id}`}>{`${id}. ${title}`}</Link>
        </p>
      ))}
    </div>
  );
};

export default TodoList;
