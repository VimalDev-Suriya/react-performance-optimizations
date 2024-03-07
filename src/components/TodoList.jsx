import { useMemo } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos, activeTab } = props ?? {};

  // 
  const todosToBeDisplayed = useMemo(
    () =>
      todos.filter((todo) => {
        if (activeTab === "all") {
          return true;
        }
        if (activeTab === "active") {
          return !todo.completed;
        }
        if (activeTab === "completed") {
          return todo.completed;
        }
      }),
    [activeTab]
  );

  if (!todosToBeDisplayed.length) {
    return <h1>No Todos</h1>;
  }

  return (
    <ul>
      {todosToBeDisplayed?.map(({ title, completed, id }) => (
        <TodoItem title={title} completed={completed} key={`${title} ${id}`} />
      ))}
    </ul>
  );
};

export default TodoList;
