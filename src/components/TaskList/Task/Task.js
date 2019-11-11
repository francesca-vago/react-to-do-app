import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Input } from 'reactstrap';
import './Task.css';

export default class Task extends Component {

  deleteTask = (taskId) => {
    axios.delete(`http://localhost:5000/`, {
     params: {_id: {taskId}}
    })
      .then(res => console.log(res.data));
  }

  handleChange = (e) => {
    if (e.target.checked) {
      console.log('I am checked');
      const taskId = e.target.value;

      console.log(taskId);

      this.deleteTask(taskId);

      window.location.reload(true);
    } else {
      console.log('I am unchecked');
    }
  }

  render(props) {
    return (
        <Form>
          <FormGroup className="item text-capitalize d-flex justify-content-between my-2">
            <Input
              type = "checkbox"
              value = {this.props.id}
              onChange = {this.handleChange}
            />
            <p>{this.props.title}</p>
          </FormGroup>
        </Form>
    );
  }
}
