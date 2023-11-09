export interface TodosModalProps {
  onClose: () => void;
}

export interface Todo {
  id: string;
  todoText: string;
  isDone: boolean;
}
