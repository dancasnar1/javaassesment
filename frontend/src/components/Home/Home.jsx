import React from "react";
import axios from "axios";
import "./Home.css";
import UsersList from "../UsersList/UsersList";
import AddUser from "../AddUser/AddUser";

function Users() {
  
  const baseURL = "http://localhost:8087/users";
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      const arrayUsers = response.data;
      setUsers(arrayUsers);
    });
  }, []);

  return <div>
    <UsersList users={users}></UsersList>
    <AddUser />
  </div>;
}

export default Users;