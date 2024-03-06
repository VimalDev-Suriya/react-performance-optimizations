import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import UserSelect from "./UserSelect";
import { useTodos } from "../hooks/useTodos";
import TodoList from "./TodoList";

const Todos = () => {
  const [user, setUser] = useState(1);
  const { error, fetchTodosUser, loading, todos, fetchTodos } = useTodos();
  const [tab, setTab] = useState("all");

  useEffect(() => {
    fetchTodosUser();
  }, []);

  useEffect(() => {
    if (todos.length) {
      if (user === "all") {
        fetchTodos();
      } else {
        fetchTodosUser(user);
      }
    }
  }, [user]);

  if (error) {
    return <div>Error occured</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Link to={"/"}>Go Back</Link>
      <h1>Active User: {user}</h1>
      <UserSelect val={user} onChange={(e) => setUser(e.target.value)} />

      <div className="btn-group">
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
      </div>

      <TodoList todos={todos} activeTab={tab} />
    </>
  );
};

export default Todos;
