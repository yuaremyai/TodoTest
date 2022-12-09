import React from "react";
import { useAppSelector } from "./hooks";
import Body from "./components/Global/Body";
import Title from "./components/Global/Title";
import Container from "./components/Global/Container";
import CreateTodoBar from "./components/CreateTodoBar";
import TodoComponent from "./components/TodoComponent/TodoComponent";

function App() {
  const { todos } = useAppSelector((state) => state.todoReducer);

  return (
    <Body>
      <Container>
        <Title>Things To Do:</Title>
        <CreateTodoBar />
        {todos.map((value) => (
          <TodoComponent key={value.key} todo={value}></TodoComponent>
        ))}
      </Container>
    </Body>
  );
}

export default App;
