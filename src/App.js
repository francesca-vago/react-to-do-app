import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import TaskInput from './components/Form/TaskInput';
import TaskList from './components/TaskList/TaskList';

class App extends Component {

  handleDelete = (id) => {
    const filteredTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: filteredTasks
    })
  }

  render() {
    return (
      <Router>
        <Route path='/' exact component={TaskInput} />
        <Route path='/' exact component={TaskList} />
      </Router>
    )
  }
}

export default App;
