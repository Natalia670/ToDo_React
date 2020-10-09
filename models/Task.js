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

exports.change_status = (id) => {
  return knex('tasks')
    .update({ status: exports.DONE })
    .where('id', id);
}

exports.delete = (task) => {
  return knex('tasks')
    .delete()
    .where('id', task.id);
}
