import React from "react";
import classes from "./Buttons.module.scss";
import edit from "../../../images/edit.svg";
import { useAppDispatch } from "../../../hooks";
import { todoSlice } from "../../../store/reducers/todoSlice";

interface Props {
  id: number;
}

function EditButton({ id }: Props) {
  const dispatch = useAppDispatch();
  const { setEditMode } = todoSlice.actions;

  return (
    <div
      className={classes.edit_button}
      onClick={() => dispatch(setEditMode(id))}
    >
      <img src={edit} alt="" className={classes.button_icon} />
    </div>
  );
}

export default EditButton;
