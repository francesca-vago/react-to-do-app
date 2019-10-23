import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Task.css';

const task = (props) => {
  return (
    <div>
      <ListGroupItem className="text-capitalize d-flex justify-content-between my-2">
        <h3>{props.title}</h3>
        <div className="task-icons">
          <span className="mx-2 text-success">
            <FontAwesomeIcon icon={faPen}/>
          </span>
          <span className="mx-2 text-danger">
            <FontAwesomeIcon icon={faTrash}/>
          </span>
        </div>
      </ListGroupItem>
    </div>
  );
}

export default task;


