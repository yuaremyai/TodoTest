import React from "react";
import classes from "./AddButton.module.scss";
import addIcon from "../../../images/add.svg";

interface Props {
  handleClick: () => void;
}

function AddButton({ handleClick }: Props) {
  return (
    <div className={classes.button}>
      <img
        src={addIcon}
        alt=""
        className={classes.button_icon}
        onClick={handleClick}
      />
    </div>
  );
}

export default AddButton;
