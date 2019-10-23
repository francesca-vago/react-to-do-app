import React, { Component } from 'react';
import { ListGroup, Button } from 'reactstrap';
import Task from './Task/Task';

class TaskList extends Component {

  render() {
    const {tasks, clearList} = this.props;

    return(
      <div>
        <ListGroup>
          <h1>I am the Task List</h1>
            {tasks.map(task => {
              return(
                <Task key={task.id} title={task.title}/>
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
