import React from "react";
import "./Body.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import UsersList from "../../components/UsersList/UsersList";

function Body() {
  return (
    <div className="MainContainerBody">
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/userList/:id" element={<UsersList />} exact></Route>
      </Routes>
    </div>
  );
}

export default Body;