import React from "react";
import { Todo } from "../types";
type DispatchTodo = React.Dispatch<React.SetStateAction<Todo[]>>;
export interface TodoItemProps {
    id: string;
    todoText: string;
    isDone: boolean;
    setTodos: DispatchTodo;
}
export interface TodoItemStyledProps {
    $isDone: boolean;
}
export {};
