const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  name: { type: String }
}, {
  timestamps: true
});

const Task = mongoose.model('Task', tasksSchema);

module.exports = Task;
