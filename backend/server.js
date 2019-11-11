// Require packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Create the express server
const app = express();
const port = process.env.PORT || 5000;

// Parse json files
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Connect the database
mongoose.connect('mongodb://localhost:27017/todolistdb',
                {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
                );

// Require router
const tasksRouter = require('./routes/tasks');

app.use('/', tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
