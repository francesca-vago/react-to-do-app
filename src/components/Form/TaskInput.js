import React, { Component } from 'react';
import { Form, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class TaskInput extends Component {
  render() {
    const {task, handleChange, handleSubmit} = this.props
    return(
      <div>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <FontAwesomeIcon icon={faCoffee} />
            </InputGroupAddon>
            <Input
              placeholder="add a new task"
              className="text-capitalize"
              value={task}
              onChange={handleChange}
            />
          </InputGroup>
          <Button color="primary" size="lg" block
            className="my-3" type="submit">Add Task</Button>
        </Form>
      </div>
    )
  }
}

export default TaskInput;
