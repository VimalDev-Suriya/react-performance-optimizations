const TodoItem = (props) => {
    const { title, completed } = props ?? {};
  
    return <li className={`${completed ? "green" : "red"}`}>{title}</li>;
  };
  
  export default TodoItem;