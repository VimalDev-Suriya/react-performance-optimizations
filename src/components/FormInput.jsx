import { useState } from "react";

const FormInput = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Inputed text: {input}</h3>
    </div>
  );
};

export default FormInput;
