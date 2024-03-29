import React, { useState } from 'react'
import '../styles/App.css';

function ToDo() {
  return (<tr>
    <td>
      <p>id</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>createdAt</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const reverseOrder = () =>{
    setTodos((prevTodods) =>[...prevTodos].reverse());
  };

  return (
    <div id="main">
      <button onClick ={reverseOrder}>Reverse</button>
      <table>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}


export default App;
