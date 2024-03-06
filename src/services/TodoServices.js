import axios from "axios";
import { baseUrl } from "../env";

class TodoService {
  async fetchTodosWithUserId(userId) {
    const data = await axios.get(`${baseUrl}/todos`, {
      params: { userId },
    });

    return data;
  }

  async fetchTodos() {
    const data = await axios.get(`${baseUrl}/todos`);

    return data;
  }
}

export default TodoService;