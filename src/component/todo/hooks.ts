"use client";
import { useState, useCallback } from "react";
import TodoModel from "./model";

export const useTodos = (init: TodoModel[]) => {
  const [todos, setTodos] = useState<TodoModel[]>(init);

  const addTodos = useCallback(
    (newTodoContent: string) => {
      const newTodo = {
        id: Date.now(),
        content: newTodoContent,
      };
      setTodos((todos) => [...todos, newTodo]);
    },
    [setTodos]
  );

  const removeTodos = useCallback(
    (index: number) => {
      setTodos((todo) => todo.filter((todo) => todo.id !== index));
    },
    [setTodos]
  );

  return {
    value: todos,
    add: addTodos,
    remove: removeTodos,
  };
};
