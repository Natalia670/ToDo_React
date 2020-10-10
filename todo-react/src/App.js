import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import TodoList from './Components/TodoList';
import Create from './Components/Create';
import axios from 'axios';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { description: '', status:'' }, 

  ]);

  useEffect(() => {
    axios("http://localhost:5000/")
      .then((result) => {
        console.log(result);
        //console.log("TODOS", result.data);
        setTodos(result.data);
      })
      .catch((error) => {
        console.log('There was an error: ', error);
      });
  }, []);

  const addTodo = async (description) => {
    let cTodos = Object.assign([], todos);
    const taskObject = {
      id: '',
      description: description, 
      status:'pending'
    };
    await axios.post('http://localhost:5000/tasks', taskObject)
    .then((res) => {
        console.log(res.data)
        taskObject.id = res.data.id;
    }).catch((error) => {
        console.log("El error es: ", error)
    });
    cTodos.push(taskObject );
    setTodos(cTodos);
    console.log("TODOS ", cTodos);
  
  }
  

  const markAsDone = (task) => {
    let cTodos = Object.assign([], todos);
    //console.log("MARK AS DONE: ", cTodos[task]);
    cTodos[task].status = 'done';
    let id = cTodos[task].id;
    //console.log("DONE: ", id);
    axios.put(`http://localhost:5000/done/${id}`);
    console.log("Status changed to", cTodos[task].status);
    setTodos(cTodos);
  }

  const deleteTask = (task) => {
    let cTodos = Object.assign([], todos);
    let id = cTodos[task].id;
    //console.log("DELETE", id);
    //console.log("LA TASK WA: ", cTodos[task]);
    axios.delete(`http://localhost:5000/delete/${id}`, cTodos[task])
    cTodos.splice(task, 1); 
    setTodos(cTodos);
  
  }

  return (
    <Router>
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">TODO List</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      </header>

      <Create addTodo={addTodo}/>
      <TodoList todos={todos} markAsDone={markAsDone} deleteTask={deleteTask}/>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      
    </div>
  </Router>

  );
}

export default App;
