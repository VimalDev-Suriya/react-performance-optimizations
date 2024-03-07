import { memo } from "react";

const ChildComponent = memo((props) => {
  const { count, onClick } = props ?? {};

  console.log("Child Component rendered");

  return (
    <div>
      {count}
      <h2>Child Component</h2>
      <button onClick={onClick}>Increment counter</button>
    </div>
  );
});

export default ChildComponent;
