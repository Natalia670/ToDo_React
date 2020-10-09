import React, { useState } from 'react';

const Todos = ({markAsDone, deleteTask,todo, i }) => {

    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }

    const handleDelete = (event, index) => {
        deleteTask(index);
      }
    
      return(
        <div>
            <div key={i} class="card my-3 " style={{backgroundColor: todo.status === 'pending' ? 'white' : 'lightGray'}}>
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