import React from "react";
import { useAppDispatch } from "../../hooks";
import { todoSlice } from "../../store/reducers/todoSlice";
import EditConfirmButton from "../UI/EditConfirmButton/EditConfirmButton";
import classes from "./EditComponent.module.scss";

interface Props {
  text: string;
  id: number;
}

function EditComponent({ text, id }: Props) {
  const dispatch = useAppDispatch();
  const { setEditMode, editTodo } = todoSlice.actions;

  function handleKey(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      dispatch(setEditMode(id));
    }
  }

  return (
    <div className={classes.edit_component}>
      <input
        value={text}
        className={classes.edit_component_input}
        autoFocus
        onKeyUp={handleKey}
        onChange={(e) => {
          dispatch(editTodo({ id: id, text: e.target.value }));
        }}
      />
      <EditConfirmButton id={id} />
    </div>
  );
}

export default EditComponent;
