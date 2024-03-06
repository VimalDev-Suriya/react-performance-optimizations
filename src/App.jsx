import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeSplitting from "./components/CodeSplitting";
import Memoization from "./components/Memoization";
import Screen from "./components/Screen";
import Todos from "./components/Todo";
import LazyComponent from "./components/LazyComponent";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/code-splitting" element={<CodeSplitting />} />
          <Route path="/memoization" element={<Memoization />} />
          <Route path="/use-memo" element={<Todos />} />
          <Route path="/lazy" element={<LazyComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
