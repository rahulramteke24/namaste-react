import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>Users</h1>
        <h3>Name: {this.props.name}</h3>
        <h3>Location: Noida</h3>
        <h3>Contact: 1234567890</h3>
      </div>
    );
  }
}
export default UserClass;
