import React, {useState} from 'react';
import TodoList from './Components/TodoList';
import Create from './Components/Create';
import axios from 'axios';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { description: 'Create main folder', status:'done' }, 
    { description: 'Move to main folder', status:'pending' }, 
    { description: 'Start npm in the folder', status:'pending' }
  ]);

  const addTodo = (description) => {
    let cTodos = Object.assign([], todos);
    const taskObject = {
      description: description, 
      status:'pending'
    };
    /*cTodos.push(taskObject );
    setTodos(cTodos);
    axios.post('/tasks', taskObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });*/
  }

  const markAsDone = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos[task].status = 'done';
    console.log("Status changed to", cTodos[task].status);
    setTodos(cTodos);
  }

  const deleteTask = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos.splice(task, 1);
    setTodos(cTodos);
  }

  return (
    <>
    <div className="App">
      <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="/">TODO List</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      </header>

      <Create addTodo={addTodo}/>
      <TodoList todos={todos} markAsDone={markAsDone} deleteTask={deleteTask}/>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      
    </div>
  </>

  );
}

export default App;
