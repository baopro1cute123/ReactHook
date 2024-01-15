import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Nav from './views/Nav';
import Todo from './views/Todo';
function App() {
  const [name, setName] = useState('')
  console.log(setName)
  const [address, setAddress] = useState('')

  const [todos, setTodos] = useState([
    {
      id: 'todo1', title : 'Nguyễn Dương Gia Bảo1', type: 'B1'
    },
    {
      id: 'todo2', title : 'Nguyễn Dương Gia Bảo2', type: 'B2'
    },
    {
      id: 'todo3', title : 'Nguyễn Dương Gia Bảo3', type: 'B3'
    },
    {
      id: 'todo4', title : 'Nguyễn Dương Gia Bảo4', type: 'B4'
    }
  ])
  const handleEventClick = (event) => {
    if(!address){
      alert("No!")
      return
    }
    let todo = {
      id: Math.floor((Math.random()*100000)+1), 
      title: address, type: 'B1'
    }
   setTodos([...todos, todo]);
   setAddress([]);
  }
  const handleChangeInput = (event)=>{
    setAddress(event.target.value)
    console.log(event.target.value)
  }

  const handleDeleteTodos = (todo) =>{
    let current = todos;
    current = current.filter(item => item.id !== todo)
    setTodos(current)
  }
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>

        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color: 'red', fontSize: '40px'}}>Hello My name is {name} địa chỉ {address}</h1>
       <Todo todos={todos}
        title = {"Nguyễn Bảo"}
        DeleteTodos={handleDeleteTodos}
       />
       <Todo todos={todos.filter((item => item.type==="B1"))}
        title = {`Bảo ToDos`}
       />
        <input
        type='text'
        value={address}
        onChange={(event)=>handleChangeInput(event)}
         />
        <button style={{marginTop: "10px"}} type='button'
               onClick={(event)=> handleEventClick(event)}
        >Click me!</button>
      
      </header>
    </div>
  );
}

export default App;
