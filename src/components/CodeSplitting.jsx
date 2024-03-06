import { useState } from "react";
import ChildComponent from "./ChildComponent";

// Fragments, Local Stateupdate
const CodeSplitting = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Parent Component</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Entered text: {input}</h3>
      <hr />
      <ChildComponent />
    </div>
  );
};

export default CodeSplitting;
