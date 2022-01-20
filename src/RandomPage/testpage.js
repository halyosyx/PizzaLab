import React, {useEffect, useState} from 'react'

export default function TestPage(props) {
const [users, setUsers] = useState([]);

const getUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const jsonData = await response.json();

    setUsers(jsonData);
}   

useEffect(() => {
    getUsers();
}, []);
console.log(users[0].name);
  return (
      <section className="test_page">
          <h1>Users</h1>
          {/*users.map(user => (
              <p key={user.id}>{user.firstName} {user.lastName}</p>
          ))*/}
      </section>
  )
}
