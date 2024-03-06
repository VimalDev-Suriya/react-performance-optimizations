import { useState } from "react";
import { TodoService } from "../services";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(null);

  const fetchTodosUser = async (userId = 1) => {
    try {
      setLoading(true);
      const resp = await new TodoService().fetchTodosWithUserId(userId);

      setTodos(resp.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const fetchTodos = async (userId = 1) => {
    try {
      setLoading(true);
      const resp = await new TodoService().fetchTodos();

      setTodos(resp.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    todos,
    error,
    loading,
    fetchTodosUser,
    fetchTodos,
  };
};
