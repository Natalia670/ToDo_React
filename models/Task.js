const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done';

exports.all = () => {
  return knex
    .select('*')
    .from('tasks');
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description });
}


exports.find = (id) => {
  return knex
    .select('*')
    .from('tasks')
    .where('id', id)
    .first();
}

exports.change_status = (task) => {
  return knex('tasks')
    .update({ status: 'done' })
    .where('id', task.id);
}

exports.delete = (task) => {
  return knex('tasks')
    .delete()
    .where('id', task.id);
}
