import React from "react";
import EditComponent from "../EditComponent/EditComponent";
import { Todo } from "../../types";
import styled from "styled-components";
import Grid from "../Grid";
import TodoBody from "./TodoBody";

interface Props {
  todo: Todo;
}

const TaskContainer = styled(Grid)`
  padding: 5px 10px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  column-gap: 5px;
  box-shadow: 1px 1px 5px gray;

  &:nth-child(odd) {
    background-color: #9c9efe;
  }

  &:nth-child(even) {
    background-color: #afb4ff;
  }
`;

function TodoComponent({ todo }: Props) {
  return (
    <TaskContainer>
      {todo.editMode 
      ? <EditComponent text={todo.text} id={todo.id} />
      : <TodoBody todo={todo}/> 
      }
    </TaskContainer>
  );
}

export default TodoComponent;
