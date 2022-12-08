import React from "react";
import ToDoComponent from "./components/ToDoComponent/ToDoComponent";
import { useAppSelector } from "./hooks";
import Body from "./components/Body";
import Title from "./components/Title";
import Container from "./components/Container";
import CreateTodoBar from "./components/CreateTodoBar";

function App() {
  const { todos } = useAppSelector((state) => state.todoReducer);

  return (
    <Body>
      <Container>
        <Title>Things To Do:</Title>
        <CreateTodoBar />
        {todos.map((value) => (
          <ToDoComponent key={value.key} todo={value}></ToDoComponent>
        ))}
      </Container>
    </Body>
  );
}

export default App;
