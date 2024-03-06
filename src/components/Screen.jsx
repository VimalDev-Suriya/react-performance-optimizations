import { Link } from "react-router-dom";

const Screen = () => {
  return (
    <div className="flex h100vh align-center">
      <ul>
        <li>
          <Link to={"/code-splitting"}>Code Splitting</Link>
        </li>
        <li>
          <Link to={"/memoization"}>Memoization and Call Back</Link>
        </li>
        <li>
          <Link to={"/use-memo"}>Usememo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Screen;
