import React from 'react'
import {TodoItem} from '../MyComponent/TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minHeight: "60vh",
    margin: "50px auto",
    
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className=' my-4'>Todos List</h3>
      {props.todos.length===0? <h4> "No todos to display"</h4>:
      props.todos.map((todo) => {
        return ( 
        <>
        <TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>
        <hr />
        </>
        )
})}
    </div>
  )
}
  