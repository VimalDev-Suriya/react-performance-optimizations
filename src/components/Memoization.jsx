import { useState } from "react";
import ChildComponent from "./ChildComponent";

const Memoization = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment counter
      </button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} />
    </>
  );
};

export default Memoization;

/* 
// Memoization is a programming technique

// Store (Cache)
a= 1; b=2 res=3

const func1 = (a, b) => {
 return a+b;
}

console.log(func1(1,2)) // 3 (code execution)
console.log(func1(1,2)) // 3 (from cache)
console.log(func1(2,1)) // 3 (code execution)
console.log(func1(1,2)) // 3 (code execution)
*/
