import React from "react";
import { useAppSelector } from "./hooks";
import Container from "./components/Global/Container";
import CreateTodoBar from "./components/CreateTodoBar";
import TodoComponent from "./components/TodoComponent/TodoComponent";
import StyledTitle from "./components/Global/Title";
import StyledBody from "./components/Global/Body";

function App() {
  const { todos } = useAppSelector((state) => state.todoReducer);

  return (
    <StyledBody>
      <Container>
        <StyledTitle>Things To Do:</StyledTitle>
        <CreateTodoBar />
        {todos.map((value) => (
          <TodoComponent key={value.key} todo={value}></TodoComponent>
        ))}
      </Container>
    </StyledBody>
  );
}

export default App;
