import React, { ChangeEvent, useCallback, useState, useEffect } from "react";
import { TodoInput, TodoItem } from "components";

import { useCalendar } from "providers/CalendarProvider";

import Modal from "components/Modal";

import { getCache, saveCache } from "utils/dataCaching";

import { Title } from "constants/styles/global";

import { Todo, TodosModalProps } from "./types";
import { HINT, TITLE_TEXT } from "./config";
import { TasksWrapper } from "./styled";

const TodosModal = React.memo(({ onClose }: TodosModalProps) => {
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const { selectedDate } = useCalendar();

  useEffect(() => {
    const TODO_CACHE_KEY = selectedDate.toDateString();
    const cachedTodos = getCache<Todo[]>(TODO_CACHE_KEY);

    if (cachedTodos) {
      setTodos(cachedTodos);
    }
  }, [selectedDate]);

  const handleCloseModal = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (todoText.trim() !== "") {
      const TODO_CACHE_KEY = selectedDate.toDateString();
      const existingTodos = [...todos];
      const newTodo = {
        id: String(new Date().getTime()),
        todoText: todoText,
        isDone: false,
      };

      existingTodos.push(newTodo);
      setTodos(existingTodos);
      saveCache(TODO_CACHE_KEY, existingTodos);

      setTodoText("");
    }
  }, [todoText, todos, selectedDate]);

  const TODO_ITEMS = todos.map((todo) => (
    <TodoItem
      id={todo.id}
      isDone={todo.isDone}
      key={todo.id}
      setTodos={setTodos}
      todoText={todo.todoText}
    />
  ));

  return (
    <Modal data-testid="todo-modal" onClose={handleCloseModal}>
      <Title>{TITLE_TEXT.replace("{Date}", selectedDate.toDateString())}</Title>
      <TodoInput
        todoText={todoText}
        onAddTask={handleAddTodo}
        onChange={handleInputChange}
      />
      <TasksWrapper>{todos.length !== 0 ? TODO_ITEMS : HINT}</TasksWrapper>
    </Modal>
  );
});

export default TodosModal;
