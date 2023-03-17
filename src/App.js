import { useState, useEffect } from "react";
import api from "../src/api";
import Users from './components/users';

import './App.css';

function App() {
  const [users, setUsers] = useState()
  // console.log()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, []);

 const handleDelete = (userId) =>{
  const userDel = users.filter((user) => user._id !== userId)
  setUsers(userDel);
 }
 const handleToggleBookMark = (id) => {
   setUsers(
     users.map((user) => {
       if (user._id === id) {
         return { ...user, bookmark: !user.bookmark };
       }
       return user;
     })
   );
 };
  return (
    <div>
      {users && <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />  }
      
      
    </div>
  );
}

export default App;
