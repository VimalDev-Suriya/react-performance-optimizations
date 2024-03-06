import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeSplitting from "./components/CodeSplitting";
import Memoization from "./components/Memoization";
import Screen from "./components/Screen";
import Todos from "./components/Todo";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/code-splitting" element={<CodeSplitting />} />
          <Route path="/memoization" element={<Memoization />} />
          <Route path="/use-memo" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
