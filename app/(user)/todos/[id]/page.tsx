import { notFound } from 'next/navigation';

import cx from './index.module.css';

type PageProps = {
  params: {
    id: string;
  };
};

const fetchTodoData = async (id: PageProps['params']['id']): Promise<TToDo> => {
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

const TodoItem = async ({ params: { id } }: PageProps) => {
  const { id: todoId, title, completed, userId } = await fetchTodoData(id);

  if (!todoId) {
    return notFound();
  }

  return (
    <div className={cx.wrapper}>
      <p>{`#${todoId}: ${title}`}</p>
      <p>{`Завершено: ${completed ? 'Да' : 'Нет'}`}</p>
      <p>{`От пользователя : ${userId}`}</p>
    </div>
  );
};

export default TodoItem;

export const generateStaticParams = async () => {
  const todos: TToDo[] = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10',
  ).then((res) => res.json());

  return todos.map((todo) => ({
    id: todo.id.toString(),
  }));
};
