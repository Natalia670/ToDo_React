function storeTask() {
  console.log('Stores the tasks');
  // Javascript
  let taskDescription = document.getElementById('task_description').value;
  console.log('taskDescription', taskDescription);

  let payload = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description: taskDescription })
  };
  fetch('/tasks', payload)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax";
      }
    })
    .then(task => {
      document.getElementById('task_description').value = '';
      addTask(task);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

function addTask(task) {
  let html =
  `
  <div id="${task.id}" class="card my-3">
    <div class="card-body">
      <p class="card-text">${task.description}</p>
        <a href="javascript:;"  onclick="doneTask(${task.id});"  class="card-link">Done</a>
        <a href="javascript:;"  onclick="deleteTask(${task.id});"  class="card-link">Delete</a>
    </div>
  </div>
  `;
  let node = document.createRange().createContextualFragment(html);
  document.getElementById('task_list').prepend(node);
}

function doneTask(id) {

  let payload = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id })
  };
  fetch('/done', payload)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax a done";
      }
    })
    .then(task => {
      updateTaskView(task.id);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

function updateTaskView(id){
  console.log('task completed');
  let doneEl = document.getElementById(id);
  doneEl.classList.add('text-success');
}


function deleteTask(id) {

  let payload = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id })
  };
  fetch('/delete', payload)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax a done";
      }
    })
    .then(task => {
      deleteTaskView(task.id);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

function deleteTaskView(id){
  console.log(id);
  var div = document.getElementById(id);
  div.parentNode.removeChild(div);
}

