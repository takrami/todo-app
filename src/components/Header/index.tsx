import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { GoTrashcan } from "react-icons/go";

import { Task, TaskStore } from "../../types";
import tasks from "../../redux/tasksSlice";

import {
  HeaderContainer,
  HeaderItems,
  RemoveButton,
  NavContainer,
  NavLink,
} from "./style";

const Header: React.FunctionComponent = () => {
  const items = useSelector((store: TaskStore) => store.tasks);
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
    <>
      <NavContainer>
        <NavLink to="/">Todo</NavLink>
        <NavLink to="/completed-tasks">Done</NavLink>
      </NavContainer>
      <HeaderContainer>
        <HeaderItems>All task {numberOfTasks}</HeaderItems>
        <HeaderItems>Completed {getNumberOfCompletedTasks(items)}</HeaderItems>
        <HeaderItems>
          Uncompleted {getNumberOfUnCompletedTasks(items)}
        </HeaderItems>
        <RemoveButton onClick={() => dispatch(tasks.actions.removeAllTask())}>
          <GoTrashcan />
        </RemoveButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
