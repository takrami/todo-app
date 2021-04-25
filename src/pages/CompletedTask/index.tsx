import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GoX } from "react-icons/go";

import tasks from "../../redux/tasksSlice";
import { Task, TaskStore } from "../../types";

import {
  TaskItem,
  TaskList,
  TextContainer,
  Text,
  RemoveButton,
} from "../../components/TasksList/style";
import { MainContainer } from "../../components/Main/style";
import {
  HeaderItems,
  NavContainer,
  NavLink,
} from "../../components/Header/style";

const CompletedTask: React.FunctionComponent = () => {
  const items: Task[] = useSelector((store: TaskStore) => store.tasks);

  const dispatch = useDispatch();

  const completedTasks = items.filter((item: Task) => item.isCompleted);

  if (completedTasks.length === 0) {
    return <div>Go do your tasks</div>;
  }

  return (
    <MainContainer>
      <NavContainer>
        <HeaderItems>Completed Tasks</HeaderItems>
        <NavLink to="/">Todo</NavLink>
      </NavContainer>
      <TaskList>
        {completedTasks.map((task: Task) => {
          return (
            <TaskItem key={task.id} className="task-item">
              <TextContainer>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() =>
                    dispatch(tasks.actions.toggleComplete(task.id))
                  }
                />
                <Text>{task.description}</Text>

                <RemoveButton
                  onClick={() => dispatch(tasks.actions.removeTask(task.id))}
                >
                  <GoX />
                </RemoveButton>
              </TextContainer>
            </TaskItem>
          );
        })}
      </TaskList>
    </MainContainer>
  );
};

export default CompletedTask;
