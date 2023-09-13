const User = (props) => {
  return (
    <div className="user-card">
      <h1> Name: {props.name}</h1>
      <h2> Location: Pune,Maharashtra</h2>
      <h2> Contact: @raviyadav4875</h2>
    </div>
  );
};

export default User;
