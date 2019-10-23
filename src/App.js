import React, { Component } from 'react';
import uuid from 'uuid';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import TaskInput from './components/Form/TaskInput';
import TaskList from './components/TaskList/TaskList';

class App extends Component {

  state = {
    tasks: [],
    id: uuid(),
    task: "",
    editItem: false
  }


  handleChange = (event) => {
    this.setState({
      task: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: this.state.id,
      title: this.state.task
    };

    const updatedTasks = [...this.state.tasks,newTask]

    this.setState({
      tasks: updatedTasks,
      task: '',
      id: uuid(),
      editItem: false
    })
  };

  clearList = () => {
    this.setState({
      tasks: []
    })
  }

  render() {
    return (
        <div className="App">
          <h1>Hi, I am React App!</h1>
          <Container>
            <Row>
              <Col lg="10" md="8" className="mx-auto">
                <TaskInput
                  task={this.state.task}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
                <TaskList
                  tasks={this.state.tasks}
                  clearList={this.clearList}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )
  }
}

export default App;
