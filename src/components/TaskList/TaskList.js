import React, { Component } from 'react';
import { ListGroup, Button } from 'reactstrap';
import Task from './Task/Task';

class TaskList extends Component {

  render() {
    const {tasks, clearList, handleDelete} = this.props;

    return(
      <div>
        <ListGroup>
          <h1>I am the Task List</h1>
            {tasks.map(task => {
              return(
                <Task
                  key={task.id}
                  title={task.title}
                  handleDelete={()=> handleDelete(task.id)}
                />
              )
            })}
        </ListGroup>
        <Button
          color="danger" size="lg" block
          className="my-3"
          onClick={clearList}
          >Clear List</Button>
      </div>
    )
  }
}

export default TaskList;
