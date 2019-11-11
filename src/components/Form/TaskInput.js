import React, { Component } from 'react';
import { Form, InputGroup, Input, Button } from 'reactstrap';
import axios from 'axios';

export default class TaskInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  addTask = (newTask) => {
    axios.post('http://localhost:5000', newTask)
      .then(res => console.log(res.data));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      name: this.state.name
    };

    this.addTask(newTask);

    window.location.reload(true);
  };

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit} className="item">
          <InputGroup>
            <Input
              placeholder="Add a new task"
              className="text-capitalize"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </InputGroup>
          <Button color="primary" size="lg" block
            className="my-3" type="submit">Add Task</Button>
        </Form>
      </div>
    )
  }
}
