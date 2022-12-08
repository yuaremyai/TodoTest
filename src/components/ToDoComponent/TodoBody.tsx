import React from "react";
import { Todo } from "../../types";
import trash from "../../images/trash.svg";
import edit from "../../images/edit.svg";
import Checkbox from "../UI/Checkbox";
import Text from "../Text";
import CustomButton from "../UI/CustomButton";
import { useAppDispatch } from "../../hooks";
import { todoSlice } from "../../store/reducers/todoSlice";

interface Props {
  todo: Todo;
}

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
    <>
      <Checkbox isChecked={todo.checked} handleClick={handleCheck} />
      <Text>{todo.text}</Text>
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
    </>
  );
}

export default TodoBody;
