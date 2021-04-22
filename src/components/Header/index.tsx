import React from "react";
import { useSelector } from "react-redux";

import { HeaderContainer } from "./style";

const Header = () => {
  const tasks = useSelector((store: any) => store.tasks.items);
  const numberOfTasks = tasks.length;

  const getNumberOfCompletedTasks = (tasks: any) => {
    const completedTasks = tasks.filter((task: any) => task.isCompleted);
    return completedTasks.length;
  };
  const getNumberOfUnCompletedTasks = (tasks: any) => {
    const unCompletedTasks = tasks.filter((task: any) => !task.isCompleted);
    return unCompletedTasks.length;
  };

  return (
    <HeaderContainer>
      All task {numberOfTasks} Completed {getNumberOfCompletedTasks(tasks)}
      unCompleted {getNumberOfUnCompletedTasks(tasks)}
    </HeaderContainer>
  );
};

export default Header;
