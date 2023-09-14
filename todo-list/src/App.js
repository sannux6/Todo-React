import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import {Footer} from './MyComponent/Footer';
import {Todos} from './MyComponent/Todos';
import {AddTodo} from './MyComponent/AddTodo';
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("I am ondelete of todo", todo)
    // let index = todos.indexOf(todo)
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  
 const [todos, setTodos] = useState( [
    {
      sno: 1,
      title: "Go to the m arket",
      desc: "Go to market to do this task"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "Go to mall to do this task"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "Go to ghat to do this task"
    }

  ]);
  return (
    <>
    <Header title="MyTodosList" searchBar={false}/>
    <AddTodo/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;