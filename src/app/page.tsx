"use client";
import * as React from "react";
import CreateNewTodo from "@app/component/todo/CreateNewTodo";
import Todo from "@app/component/todo/Todo";
import { useTodos } from "@app/component/todo/hooks";
import { Container } from "@mui/system";

export default function Home() {
  const todos = useTodos([]);

  return (
    <Container>
      <CreateNewTodo onAddNewTodo={todos.add} />
      {todos.value.map(({ content, id }) => (
        <Todo key={id} content={content} onFinish={() => todos.remove(id)} />
      ))}
    </Container>
  );
}
