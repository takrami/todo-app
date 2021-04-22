import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Task } from "../../types";
import tasks from "../../reducers/tasks";

import { HeaderContainer } from "./style";

const Header: React.FunctionComponent = () => {
  const items = useSelector((store: any) => store.items);
  const dispatch = useDispatch();

  const numberOfTasks: number = items.length;

  const getNumberOfCompletedTasks = (items: Task[]): number => {
    const completedTasks = items.filter((task: Task) => task.isCompleted);
    return completedTasks.length;
  };

  const getNumberOfUnCompletedTasks = (items: Task[]): number => {
    const unCompletedTasks = items.filter((task: Task) => !task.isCompleted);
    return unCompletedTasks.length;
  };

  return (
    <HeaderContainer>
      All task {numberOfTasks} Completed {getNumberOfCompletedTasks(items)}
      unCompleted {getNumberOfUnCompletedTasks(items)}
      <button onClick={() => dispatch(tasks.actions.removeAllTask())}>
        remove all
      </button>
    </HeaderContainer>
  );
};

export default Header;
