import React, { useState } from 'react';


const Create = ({addTodo}) => {

    const [todo, setTodo] = useState('');

    const handleTodoChange = (event) => {
      let val = event.target.value;
      setTodo(val);
    }
    
    const handleCreateClick = (event) => {
      addTodo(todo);
      setTodo('');
    }

  return (
    <div class="col-lg-12">
        <br></br>
        <br></br>
        <br></br>
         <h1>Todo list in React</h1>
         <br></br>
        <div class="input-group w-100">
          <input
            type="text"
            name="description"
            placeholder="I have to..."
            class="form-control"
            onChange={handleTodoChange}
            />
          <div class="input-group-append">
            <input type="button" value="Add" class="btn btn-primary" onClick={handleCreateClick}/>
          </div>
        </div>
      </div>
  )
}

export default Create;