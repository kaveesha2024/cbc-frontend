import React, { useEffect, useState } from "react";
import TableUsers from "./TableUsers.jsx";
import axios from "axios";

const Users = () => {
  useEffect(() => {
    getAllUsers();
  }, []);
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try{
      const response = await axios.get('/api/users', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUsers(response.data)
    }catch (err){
      console.log(err);
    }
  };
  return (
    <div className=' w-full h-screen p-20'>
      <TableUsers users={users} />
    </div>
  );
};

export default Users;