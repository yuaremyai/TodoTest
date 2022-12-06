import React from "react";
import classes from "./Buttons.module.scss";
import trash from "../../../images/trash.svg";
import { useAppDispatch } from "../../../hooks";
import { todoSlice } from "../../../store/reducers/todoSlice";

interface Props {
  id: number;
}

function DeleteButton({ id }: Props) {
  const dispatch = useAppDispatch();
  const { deleteTodo } = todoSlice.actions;

  return (
    <div
      className={classes.delete_button}
      onClick={() => dispatch(deleteTodo(id))}
    >
      <img src={trash} alt="" className={classes.button_icon} />
    </div>
  );
}

export default DeleteButton;
