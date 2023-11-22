export interface ButtonProps {
  title: string;
  onButtonClick: () => void;
  $isTodosEnabled?: boolean;
}

export interface ButtonStyledProps {
  $isTodosEnabled?: boolean;
}
