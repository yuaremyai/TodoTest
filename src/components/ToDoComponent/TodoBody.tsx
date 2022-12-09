import React from "react";
import { Todo } from "../../types";
import trash from "../../images/trash.svg";
import edit from "../../images/edit.svg";
import Checkbox from "../UI/Checkbox";
import CustomButton from "../UI/CustomButton";
import { useAppDispatch } from "../../hooks";
import { todoSlice } from "../../store/reducers/todoSlice";
import styled from "styled-components";
import Grid from "../Global/Grid";
import StyledText from "./StyledText";

interface Props {
  todo: Todo;
}

export const TaskContainer = styled(Grid)`
  margin: 0;  
  padding: 5px 10px;
  width: 100%;
  grid-column: span 12;
  border-radius: 10px;
  align-items: center;
  column-gap: 5px;
  box-shadow: 1px 1px 5px gray;
`;

function TodoBody({ todo }: Props) {
  const dispatch = useAppDispatch();
  const { setEditMode, deleteTodo, setCheck } = todoSlice.actions;

  function handleEdit() {
    dispatch(setEditMode(todo.id));
  }

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  function handleCheck() {
    dispatch(setCheck(todo.id))
  }

  return (
    <TaskContainer>
      <Checkbox isChecked={todo.checked} handleClick={handleCheck} />
      <StyledText>{todo.text}</StyledText>
      <CustomButton
        src={edit}
        size="30px"
        bgColor="#4de854"
        handleClick={handleEdit}
      />
      <CustomButton
        src={trash}
        size="30px"
        bgColor="#ff5c5c"
        handleClick={handleDelete}
      />
    </TaskContainer>
  );
}

export default TodoBody;
