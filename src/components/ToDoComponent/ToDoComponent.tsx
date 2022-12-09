import React from "react";
import TaskEditComponent from "../TaskEditComponent";
import { Todo } from "../../types";
import styled from "styled-components";
import Grid from "../Global/Grid";
import TodoBody from "./TodoBody";
import { TaskContainer } from "./TodoBody";

interface Props {
  todo: Todo;
}

const CheckerGrid = styled(Grid)`
border-radius: 10px;

&:nth-child(odd) ${TaskContainer} {
  background-color: #9c9efe;
}

&:nth-child(even) ${TaskContainer} {
  background-color: #afb4ff;
}
`


function TodoComponent({ todo }: Props) {
  return (
    <CheckerGrid>
      {todo.editMode 
      ? <TaskEditComponent text={todo.text} id={todo.id} />
      : <TodoBody todo={todo}/> 
      }
    </CheckerGrid>
  );
}

export default TodoComponent;
