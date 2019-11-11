import React, { Component } from 'react';
import axios from 'axios';
import { Form, ListGroup, Button } from 'reactstrap';
import Task from './Task/Task';

class TaskList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            tasks: res.data
          })
        }
      })
  }

  deleteAllTasks = () => {
    axios.delete('http://localhost:5000')
      .then(res => console.log(res.data));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.deleteAllTasks();

    window.location.reload(true);

  }

  render() {
    return(
      <div>
        <ListGroup className="box" id="heading">
          <h1>I am the Task List</h1>
            {this.state.tasks.map(task => {
              return(
                <Task
                  key={task._id}
                  id={task._id}
                  title={task.name}
                />
              )
            })}
        </ListGroup>
        <Form onSubmit={this.handleSubmit}>
          <Button
            color="danger" size="lg" block
            className="my-3"
            type="submit"
            >Clear List</Button>
        </Form>
      </div>
    )
  }
}

export default TaskList;
