import { ChangeEvent } from "react";

export interface TodoInputProps {
  todoText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
}
