import React from "react";
import Checkbox from "../UI/Checkbox/Checkbox";
import DeleteButton from "../UI/ToDoComponentButtons/DeleteButton";
import EditButton from "../UI/ToDoComponentButtons/EditButton";
import EditComponent from "../EditComponent/EditComponent";
import classes from "./ToDoComponent.module.scss";
import { Todo } from "../../types";

interface Props {
  todo: Todo;
}

function ToDoComponent({ todo }: Props) {
  return (
    <div className={classes.todo_component}>
      {todo.editMode ? (
        <EditComponent text={todo.text} id={todo.id} />
      ) : (
        <div className={classes.todo_component_body}>
          <Checkbox isChecked={todo.checked} id={todo.id} />
          <div className={classes.todo_component_text}>{todo.text}</div>
          <EditButton id={todo.id} />
          <DeleteButton id={todo.id} />
        </div>
      )}
    </div>
  );
}

export default ToDoComponent;
