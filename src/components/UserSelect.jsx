const UserSelect = (props, ref) => {
  const { onChange, val } = props ?? {};

  return (
    <label className="mb1">
      Select the User :
      <select name="user" onChange={onChange} value={val}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="all">All</option>
      </select>
    </label>
  );
};

export default UserSelect;
