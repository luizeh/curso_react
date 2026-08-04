import React, { useState } from "react";

export default function ListRender() {
  const [list] = useState(["Jamilton", "Turca", "Pedro"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Jamilton", age: 34 },
    { id: 2, name: "Turca", age: 27 },
    { id: 3, name: "Pedro", age: 24 },
  ]);

  const deleteRandom = () =>{
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }
  

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar usuario random</button>
    </div>
  );
}
