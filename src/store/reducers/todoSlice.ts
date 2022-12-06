import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: localStorage.todos
    ? JSON.parse(localStorage.getItem("todos") || "[]")
    : [],
};

function save(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((value) => value.id !== action.payload);
      save(state.todos);
    },

    addTodo(state, action: PayloadAction<Todo>) {
      state.todos = [...state.todos, action.payload];
      save(state.todos);
    },

    editTodo(state, action: PayloadAction<{ id: number; text: string }>) {
      const todo = state.todos.filter(
        (value) => value.id === action.payload.id
      )[0];
      todo.text = action.payload.text;
      save(state.todos);
    },

    setCheck(state, action: PayloadAction<number>) {
      const todo = state.todos.filter(
        (value) => value.id === action.payload
      )[0];
      todo.checked = !todo.checked;
      save(state.todos);
    },

    setEditMode(state, action: PayloadAction<number>) {
      const todo = state.todos.filter(
        (value) => value.id === action.payload
      )[0];
      todo.editMode = !todo.editMode;
    },
  },
});

export default todoSlice.reducer;
