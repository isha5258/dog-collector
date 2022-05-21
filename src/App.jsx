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


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<ToDoList todos={todos} />} 
        />
        <Route path='/addtodo' element={<AddToDo />}/>
      </Routes>
    </>
    
  );
}

export default App;
