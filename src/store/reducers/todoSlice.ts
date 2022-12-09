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

function filterTodo(state:TodoState, id:number) {
  return state.todos.filter((value) => value.id === id)[0]
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
      const todo = filterTodo(state, action.payload.id)
      todo.text = action.payload.text;
      save(state.todos);
    },

    setCheck(state, action: PayloadAction<number>) {
      const todo = filterTodo(state, action.payload)
      todo.checked = !todo.checked;
      save(state.todos);
    },

    setEditMode(state, action: PayloadAction<number>) {
      const todo = filterTodo(state, action.payload)
      todo.editMode = !todo.editMode;
      save(state.todos);
    },
  },
});

export default todoSlice.reducer;
