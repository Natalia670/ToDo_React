const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
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
  let task = {};
  task.id = req.body.id;
  task.description = req.body.description;
  task.status = "done";
  console.log('Task created with id: ', task.id);
  Task.change_status(task.id).then((id) => {
    console.log('Task created with id: ', task.id);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.find(task.id).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  let task = {};
  task.id = req.body.id;
  task.description = req.body.description;
  Task.delete(task).then((id) => {
    console.log('Task deleted with id: ', task.id);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      res.json(task);
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