import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "../../reducers/tasks";

import { HeaderContainer } from "./style";

const Header = () => {
  const items = useSelector((store: any) => store.tasks.items);
  const dispatch = useDispatch();
  const numberOfTasks = items.length;

  const getNumberOfCompletedTasks = (items: any) => {
    const completedTasks = items.filter((task: any) => task.isCompleted);
    return completedTasks.length;
  };

  const getNumberOfUnCompletedTasks = (items: any) => {
    const unCompletedTasks = items.filter((task: any) => !task.isCompleted);
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
