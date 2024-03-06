const ChildComponent = (props) => {
  const { count, onClick } = props ?? {};

  console.log("Child Component rendered");

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
};

export default ChildComponent;
