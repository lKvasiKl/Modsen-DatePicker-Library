import { ChangeEvent, useCallback, useState, useEffect } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import Modal from "components/Modal";
import { useCalendar } from "providers/CalendarProvider";
import { Title } from "constants/styles/global";
import { getCache, saveCache } from "utils/dataCaching";

import { Todo, TodosModalProps } from "./types";
import { HINT, TITLE_TEXT } from "./config";
import { TasksWrapper } from "./styled";

const TodosModal = ({ onClose }: TodosModalProps) => {
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const { selectedDate } = useCalendar();

  useEffect(() => {
    const TODO_CACHE_KEY = selectedDate.toDateString();
    const cachedTodos = getCache<Todo[]>(TODO_CACHE_KEY);

    if (cachedTodos) {
      setTodos(cachedTodos);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    onClose();
  }, []);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTodoText(e.target.value);
    },
    [todoText],
  );

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
      key={todo.id}
      todoText={todo.todoText}
      isDone={todo.isDone}
      setTodos={setTodos}
    />
  ));

  return (
    <Modal onClose={handleCloseModal}>
      <Title>{TITLE_TEXT.replace("{Date}", selectedDate.toDateString())}</Title>
      <TodoInput
        todoText={todoText}
        onChange={handleInputChange}
        onAddTask={handleAddTodo}
      />
      <TasksWrapper>{todos.length !== 0 ? TODO_ITEMS : HINT}</TasksWrapper>
    </Modal>
  );
};

export default TodosModal;
