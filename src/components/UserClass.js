import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <h1> Name: {this.props.name}</h1>
        <h2> Location: Pune,Maharashtra</h2>
        <h2> Contact: @raviyadav4875</h2>
      </div>
    );
  }
}

export default UserClass;
