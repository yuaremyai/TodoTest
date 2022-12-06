import React from "react";
import { useAppDispatch } from "../../../hooks";
import mark from "../../../images/mark.svg";
import { todoSlice } from "../../../store/reducers/todoSlice";
import classes from "./Checkbox.module.scss";

interface Props {
  isChecked: boolean;
  id: number;
}

function Checkbox({ isChecked, id }: Props) {
  const dispatch = useAppDispatch();
  const { setCheck } = todoSlice.actions;

  return (
    <label>
      <input
        className={classes.checkbox}
        hidden
        type="checkbox"
        checked={isChecked}
        onClick={() => dispatch(setCheck(id))}
      />
      <div className={classes.checkmark}>
        <img src={mark} alt="" className={classes.mark_icon} />
      </div>
    </label>
  );
}

export default Checkbox;
