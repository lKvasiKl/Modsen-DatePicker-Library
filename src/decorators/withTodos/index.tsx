import { ComponentType, useCallback, useState } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { Button, TodosModal } from "components/index";
import { CalendarProps } from "components/Calendar/types";

import usePortal from "hooks/usePortal";

import { getCache } from "utils/dataCaching";

import { ADD_TASK_BUTTON_TITLE, VIEW_TASK_BUTTON_TITLE } from "./config";

interface WithRangeProps extends Pick<CalendarProps, "isTodosEnabled"> {}

const withTodo = <T extends WithRangeProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentWithTodo = (props: Omit<T, keyof WithRangeProps>) => {
    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

    const { selectedDate } = useCalendar();
    const todosPortal = usePortal();

    const handleOpenTodo = useCallback(() => {
      setIsTodoModalOpen(true);
    }, []);

    const handleCloseTodoModal = useCallback(() => {
      setIsTodoModalOpen(false);
    }, []);

    const todos = getCache(selectedDate.toDateString());
    const isTodosExist = todos.length !== 0;

    return (
      <>
        <WrappedComponent {...(props as T)} isTodosEnabled={true} />
        <Button
          title={isTodosExist ? VIEW_TASK_BUTTON_TITLE : ADD_TASK_BUTTON_TITLE}
          onButtonClick={handleOpenTodo}
        />
        {isTodoModalOpen &&
          todosPortal(<TodosModal onClose={handleCloseTodoModal} />)}
      </>
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithTodo.displayName = `withTodo(${displayName})`;

  return ComponentWithTodo;
};

export default withTodo;
