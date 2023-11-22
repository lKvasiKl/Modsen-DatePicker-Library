import React, { useCallback } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { getCache, saveCache } from "utils/dataCaching";

import { Todo } from "../types";

import { TodoItemProps } from "./types";
import { BUTTON_TEXT } from "./config";
import { DeleteTaskButton, TodoText, TodoWrapper } from "./styled";

const TodoItem = React.memo((props: TodoItemProps) => {
  const { id, todoText, isDone, setTodos } = props;

  const { selectedDate } = useCalendar();

  const handleCheckboxChange = useCallback(() => {
    const TODO_CACHE_KEY = selectedDate.toDateString();
    const todos = getCache<Todo[]>(TODO_CACHE_KEY);

    const updatedTodos = todos.map((todo: TodoItemProps) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }

      return todo;
    });

    setTodos(updatedTodos);
    saveCache(TODO_CACHE_KEY, updatedTodos);
  }, [id, selectedDate, setTodos]);

  const handleDeleteTodo = useCallback(() => {
    const TODO_CACHE_KEY = selectedDate.toDateString();
    const todos = getCache<Todo[]>(TODO_CACHE_KEY);

    const updatedTodos = todos.filter((todo: TodoItemProps) => todo.id !== id);

    setTodos(updatedTodos);
    saveCache(TODO_CACHE_KEY, updatedTodos);
  }, [id, selectedDate, setTodos]);

  return (
    <TodoWrapper>
      <input checked={isDone} type="checkbox" onChange={handleCheckboxChange} />
      <TodoText $isDone={isDone}>{todoText}</TodoText>
      <DeleteTaskButton onClick={handleDeleteTodo}>
        {BUTTON_TEXT}
      </DeleteTaskButton>
    </TodoWrapper>
  );
});

export default TodoItem;
