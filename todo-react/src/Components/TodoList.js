import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, markAsDone, deleteTask }) => {

    return (
        <div id="ListaDeTasks">
          {todos.map((todo, i) => {
            //console.log("TODO DENTRO DE LISTA DE TASKS",todo);
            return (
                <Todo markAsDone={markAsDone} deleteTask={deleteTask} todo={todo} i={i}/>
            )
          })}
        </div>
    );
}

export default TodoList;