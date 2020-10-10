import React, { useState } from 'react';

const Todos = ({markAsDone, deleteTask, todo, i }) => {

    //console.log("TODOS DENTRO DE TODOS: ", todo);

    const handleMarkAsDone = (event, index) => {
        //console.log("IDENTIFICADOR DONE ES ", index)
        markAsDone(index);
    }

    const handleDelete = (event, index) => {
        //console.log("IDENTIFICADOR DELETE ES ", index)
        //console.log("ID CHIDO ", todo.id)
        deleteTask(index);
      }
    
      return(
        <div>
            <div key={i} id={todo.id} class="card my-3 " style={{backgroundColor: todo.status === 'pending' ? 'white' : 'lightGray'}}>
                <div class="card-body">
                <p class="card-text">{ todo.description }</p>
                {todo.status === 'pending' && (
                    <a href="#"  onClick={(event) => handleMarkAsDone(event, i)} class="card-link">Done</a>     
                )}
                <a href="#"  onClick={(event) => handleDelete(event, i)} class="card-link">Delete</a>
                </div>
            </div>
        </div>

      );

      
}

export default Todos;