import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//Components
import ToDoList from './Components/ToDoList';
import AddToDo from './Components/AddToDo';
import Nav from './Components/Nav/Nav';

function App() {
//state
const [todos, setTodos] = useState([])

  const handleAddTodo = newTodo => {
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <Nav />
      <main className='main'>
        <Routes>
          <Route path='/' element={<ToDoList todos={todos} />} 
          />
          <Route path='/addtodo' element={<AddToDo  handleAddTodo={handleAddTodo} />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
