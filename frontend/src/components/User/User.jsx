import React from 'react'
import "./User.css";

function User(props) {
  return (
  <table class="table-primary">
    <thead>
      <tr>
        <th scope="table-primary">#</th>
        <th scope="table-primary">Name</th>
        <th scope="table-primary">Email</th>
        <th scope="table-primary">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="table-primary">{props.users[props.i].id}</th>
        <td>{props.users[props.i].firstName} {props.users[props.i].lastName}</td>
        <td>{props.users[props.i].email}</td>
        <td>{props.users[props.i].phoneNumber}</td>
      </tr>
    </tbody>
</table>
  )
}

export default User