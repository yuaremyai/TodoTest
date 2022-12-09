import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { todoSlice } from "../store/reducers/todoSlice";
import Grid from "./Global/Grid";
import CustomButton from "./UI/CustomButton";
import CustomInput from "./UI/CustomInput";
import addIcon from "../images/add.svg";

function CreateTodoBar() {
  const dispatch = useAppDispatch();
  const { addTodo } = todoSlice.actions;
  const [text, setTodoText] = useState<string>("");

  function handleKey(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      AddNewTodo();
    }
  }

  function AddNewTodo() {
    if (text.trim()) {
      const newTask = {
        key: Date.now(),
        id: Date.now(),
        text: text,
        checked: false,
        editMode: false,
      };
      dispatch(addTodo(newTask));
    }
    setTodoText("");
  }

  return (
    <Grid>
      <CustomInput
        value={text}
        placeholder="Add thing to do"
        onChange={(e) => setTodoText(e.currentTarget.value)}
        onKeyUp={handleKey}
      />
      <CustomButton
        src={addIcon}
        size="40px"
        bgColor="#4de854"
        handleClick={AddNewTodo}
        shadowed
      />
    </Grid>
  );
}

export default CreateTodoBar;
