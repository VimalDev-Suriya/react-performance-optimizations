import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const Memoization = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  // Each func will be re-define
  // return the func
  // After useCallback - this func will be cached
  const handleCounter = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    [count]
  );

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} onClick={handleCounter} />
    </>
  );
};

export default Memoization;

/* 
// Memoization is a programming tech

// Store (Cache)
a=1 , b=2 res=3 

const func1 = memo((a, b) => {
 return a + b;
})

func1(1, 2) // 3 (code execution)
func1(1, 2) // 3 (code execution)

// Memo
func1(1, 2) // 3 (code execution)
func1(1, 2) // 3 (cache)
func1(3, 2) // 3 (code execution)
func1(3, 2) // 3 (cache)
func1(1, 2) // 3 (cache)

// Memo react: (prev data (props))
func1(1, 2) // 3 (code execution)
func1(1, 2) // 3 (cache) (not rerender)
func1(3, 2) // 3 (code execution)
func1(3, 2) // 3 (cache)
func1(1, 2) // 3 (code exceute) (re-render)
*/
