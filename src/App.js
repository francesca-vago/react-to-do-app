import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task/Task';

const App = () => {
  const [tasksState, setTasksState] = useState({
      tasks: [
        {name: "Franci", chore: "study"},
        {name: "Agu", chore: "clean dishes"},
        {name: "MrFluffy", chore: "purr"}
      ]
  });

  const switchTaskHandler = () => {
    // console.log("It was clicked");
    // DON'T DO THIS: this.state.tasks[0].name = "Agu";
    setTasksState({
      tasks: [
        {name: "Agu", chore: "study"},
        {name: "Franci", chore: "clean dishes"},
        {name: "MrFluffy", chore: "purr"}
      ]
    })
  }

  const taskChangeHandler = (event) => {
    setTasksState({
      tasks: [
        {name: "Franci", chore: event.target.value},
        {name: "Agu", chore: "clean dishes"},
        {name: "MrFluffy", chore: "cuddle"}
      ]
    })
  }

  const style = {
    backgroundColor: 'black',
    font: 'inherit',
    color: 'white'
  }

  return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <button
        style={style}
        onClick={switchTaskHandler}>Switch Task</button>
        <Task
          name={tasksState.tasks[0].name}
          chore={tasksState.tasks[0].chore}
          changed={taskChangeHandler}/>
        <Task
          name={tasksState.tasks[1].name}
          chore={tasksState.tasks[1].chore}>Cancelled</Task>
        <Task
          name={tasksState.tasks[2].name}
          chore={tasksState.tasks[2].chore}/>
      </div>
    );
}

export default App;
