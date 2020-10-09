import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, markAsDone, deleteTask }) => {

    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }

    const handleDelete = (event, index) => {
        deleteTask(index);
      }
    

    return (
        <div id="ListaDeTasks">
          {todos.map((todo, i) => {
            return (
                <Todo markAsDone={markAsDone} deleteTask={deleteTask} todo={todo} i={i}/>
            )
          })}
        </div>
    );
}

export default TodoList;