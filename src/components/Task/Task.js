import React from 'react';
import './Task.css';

const task = (props) => {
  return (
    <div className="Task">
      <p>{props.name}: you need to {props.chore}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.chore}/>
    </div>
  );
}

export default task;
