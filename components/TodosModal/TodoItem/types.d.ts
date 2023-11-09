import React from "react";
import { Todo } from "../types";
export interface TodoItemProps {
    id: string;
    todoText: string;
    isDone: boolean;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export interface TodoItemStyledProps {
    $isDone: boolean;
}
