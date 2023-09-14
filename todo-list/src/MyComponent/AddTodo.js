import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = () =>{

    }

  return (
    <div className='container my-3'>
        <h1>Add a Todo</h1>
    <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title" class="form-label">Todo title</label>
    <input type="text" value={title} class="form-control" id="title"/>
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Todo Description</label>
    <input type="text" value={desc} class="form-control" id="desc"/>
  </div>
  <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
</form>
</div>
  )
}
