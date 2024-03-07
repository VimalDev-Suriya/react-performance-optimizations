import ChildComponent from "./ChildComponent";
import FormInput from "./FormInput";

// Code Spilitting.
// on the point of indepedant state management
const CodeSplitting = () => {
  return (
    <div>
      <FormInput />
      <hr />
      <ChildComponent />
    </div>
  );
};

export default CodeSplitting;
