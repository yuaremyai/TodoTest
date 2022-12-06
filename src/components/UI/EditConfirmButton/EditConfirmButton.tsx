import React from "react";
import { useAppDispatch } from "../../../hooks";
import save from "../../../images/confirm.svg";
import { todoSlice } from "../../../store/reducers/todoSlice";
import classes from "./EditConfirmButton.module.scss";

interface Props {
  id: number;
}

function EditConfirmButton({ id }: Props) {
  const dispatch = useAppDispatch();
  const { setEditMode } = todoSlice.actions;

  return (
    <div className={classes.button} onClick={() => dispatch(setEditMode(id))}>
      <img src={save} alt="" className={classes.button_icon} />
    </div>
  );
}

export default EditConfirmButton;
