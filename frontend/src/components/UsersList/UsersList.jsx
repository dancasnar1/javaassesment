import React from "react";
import "./UsersList.css";
import User from "../User/User";

function UsersList(props) {
  let users = props.users;
  if (!users) return null;
  const nUsers = users.length;
  const cards = [];
  for (let i = 0; i < nUsers; i++) {
    cards.push(
      <User
        users={users}
        i={i}
      ></User>
    );
    }
  return <div className="container">
    {cards}
  </div>;
}
export default UsersList;