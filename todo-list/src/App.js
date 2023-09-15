import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponent/Header";
import { Footer } from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
import { AddTodo } from "./MyComponent/AddTodo";
import React, { useState, useEffect } from "react";

function App() {

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }

  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    // let index = todos.indexOf(todo)
    // todos.splice(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    if (localStorage.getItem("todos")) {
      localStorage.getItem("todos", JSON.stringify(todos));
    }
  };

  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="MyTodosList" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
  }

export default App;
