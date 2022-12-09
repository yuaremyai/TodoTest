import React from "react";
import { useAppDispatch } from "../hooks";
import { todoSlice } from "../store/reducers/todoSlice";
import CustomButton from "./UI/CustomButton";
import CustomInput from "./UI/CustomInput";
import save from "../images/confirm.svg";

interface Props {
  text: string;
  id: number;
}

function TaskEditComponent({ text, id }: Props) {
  const dispatch = useAppDispatch();
  const { setEditMode, editTodo } = todoSlice.actions;

  function handleKey(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      dispatch(setEditMode(id));
    }
  }

  function handleClick() {
    dispatch(setEditMode(id));
  }

  function handleEdit(e: React.FormEvent<HTMLInputElement>) {
    dispatch(editTodo({ id: id, text: e.currentTarget.value }));
  }

  return (
    <>
      <CustomInput
        autofocus
        value={text}
        onKeyUp={handleKey}
        onChange={handleEdit}
      />
      <CustomButton
        size="40px"
        bgColor="#4de854"
        handleClick={handleClick}
        src={save}
        shadowed
      />
    </>
  );
}

export default TaskEditComponent;
