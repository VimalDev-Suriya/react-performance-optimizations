import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeSplitting from "./components/CodeSplitting";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CodeSplitting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
