import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { todoSlice } from "../../store/reducers/todoSlice";
import AddButton from "../UI/AddButton/AddButton";
import classes from "./AddComponent.module.scss";

function AddComponent() {
  const dispatch = useAppDispatch();
  const { addTodo } = todoSlice.actions;
  const [text, setTodoText] = useState<string>("");

  function handleKey(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      NewTodo();
    }
  }

  function NewTodo() {
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
    <div className={classes.add_component}>
      <input
        placeholder="Add thing to do"
        className={classes.add_component_input}
        value={text}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyUp={handleKey}
      />
      <AddButton handleClick={NewTodo} />
    </div>
  );
}

export default AddComponent;
