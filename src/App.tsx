import React from "react";
import AddComponent from "./components/AddComponent/AddConponent";
import ToDoComponent from "./components/ToDoComponent/ToDoComponent";
import { useAppSelector } from "./hooks";
import Body from "./components/Body";
import Title from "./components/Title";
import Container from "./components/Container";

function App() {
  const { todos } = useAppSelector((state) => state.todoReducer);

  return (
    <Body>
      <Container>
        <Title>Things To Do:</Title>
        <AddComponent />
        {todos.map((value) => (
          <ToDoComponent key={value.key} todo={value}></ToDoComponent>
        ))}
      </Container>
    </Body>
  );
}

export default App;
