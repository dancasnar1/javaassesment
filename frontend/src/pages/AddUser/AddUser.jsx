import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AddUser.npcss';
import { useParams } from 'react-router-dom';

const AddUser = (props) => {
  axios.post('http://localhost:8087/users', {
    id: props.id,
    firstName: props.firstName,
    lastName: props.lastName,
    phoneNumber: props.phoneNumber,
    email: props.email,
  });

  return;
};

export default AddUser;