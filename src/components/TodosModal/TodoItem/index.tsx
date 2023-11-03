import React, { useCallback } from "react";

import { useCalendar } from "providers/CalendarProvider";
import { getCache, saveCache } from "utils/dataCaching";

import { TodoItemProps } from "./types";
import { Todo } from "../types";
import { BUTTON_TEXT } from "./config";
import { DeleteTaskButton, TodoText, TodoWrapper } from "./styled";

const TodoItem = React.memo(
  ({ id, todoText, isDone, setTodos }: TodoItemProps) => {
    const { selectedDate } = useCalendar();

    const handleCheckboxChange = useCallback(() => {
      const TODO_CACHE_KEY = selectedDate.toDateString();
      const todos = getCache<Todo[]>(TODO_CACHE_KEY);

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }

        return todo;
      });

      setTodos(updatedTodos);
      saveCache(TODO_CACHE_KEY, updatedTodos);
    }, []);

    const handleDeleteTodo = useCallback(() => {
      const TODO_CACHE_KEY = selectedDate.toDateString();
      const todos = getCache<Todo[]>(TODO_CACHE_KEY);

      const updatedTodos = todos.filter((todo) => todo.id !== id);

      setTodos(updatedTodos);
      saveCache(TODO_CACHE_KEY, updatedTodos);
    }, []);

    return (
      <TodoWrapper>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isDone}
        />
        <TodoText $isDone={isDone}>{todoText}</TodoText>
        <DeleteTaskButton onClick={handleDeleteTodo}>
          {BUTTON_TEXT}
        </DeleteTaskButton>
      </TodoWrapper>
    );
  },
);

export default TodoItem;
