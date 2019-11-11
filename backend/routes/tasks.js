// Require express router and model
const router = require('express').Router();
const Task = require('../models/task.model');

router.route('/')

// List all tasks
  .get((req, res) => {
    Task.find()
      .then(foundTasks => res.send(foundTasks))
      .catch(err => res.status(400).json(`Error: ${err}`));
  })

// Create a new task
  .post((req, res) => {
    const newTask = new Task({
      name: req.body.name
    });
    newTask.save()
      .then(() => res.send('Task added!'))
      .catch(err => res.status(400).json(`Error: ${err}`));

  })

// Delete all tasks
  .delete((req, res) => {
    Task.deleteMany({})
      .then(() => res.send('Tasks deleted!'))
      .catch(err => res.status(400).json(`Error: ${err}`));

  });


router.route('/:taskId')

// Delete one task
  .post((req, res) => {
    Task.findOneAndDelete({ _id: req.params.taskId })
      .then(() => res.send('Task deleted!'))
      .catch(err => res.status(400).json(`Error: ${err}`));

  });



module.exports = router;
