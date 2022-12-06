import React from "react";
import AddComponent from "./components/AddComponent/AddConponent";
import ToDoComponent from "./components/ToDoComponent/ToDoComponent";
import { useAppSelector } from "./hooks";
import classes from "./App.module.scss";

function App() {
  const { todos } = useAppSelector((state) => state.todoReducer);

  return (
    <div className={classes.App}>
      <div className={classes.wrapper}>
        <div className={classes.project_title}>Things To Do:</div>
        <AddComponent />
        {todos.map((value) => (
          <ToDoComponent key={value.key} todo={value}></ToDoComponent>
        ))}
      </div>
    </div>
  );
}

export default App;
