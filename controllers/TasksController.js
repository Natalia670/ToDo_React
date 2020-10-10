const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  console.log("ADENTRO DEL STORE:", task.description);
  Task.create(task).then((id) => {
    console.log('Task created with id: ', id);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.done = (req, res) => {
  let id = req.params.id;
  console.log("DENTRO DEL TASK CONTR DONE: ", id);
  Task.find(id)
  .then((data) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      return res.json(), Task.change_status(data);
    } else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  let id = req.params.id;
  console.log("DENTRO DEL TASK CONTR DELETE: ", id);
  Task.find(id)
  .then((data) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      return res.json(), Task.delete(data);
    } else {
      res.redirect('/');
    }
    
  });

}

exports.showAll = (req, res) => {
  Task.all().then((data) => {
    console.log('Data', data);
    res.send(data);
  });
}