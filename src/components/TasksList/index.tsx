import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { GoX } from "react-icons/go";

import tasks from "../../redux/tasksSlice";
import { Task, TaskStore } from "../../types";
import {
  TaskList,
  TaskItem,
  TextContainer,
  Text,
  RemoveButton,
  Time,
} from "./style";

const TasksList: React.FunctionComponent = () => {
  const items: Task[] = useSelector((store: TaskStore) => store.tasks);

  const dispatch = useDispatch();

  if (items.length === 0) {
    return <div>there is nothing</div>;
  }

  return (
    <TaskList>
      {items.map((task: Task) => (
        <TaskItem key={task.id} className="task-item">
          <TextContainer>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}
            />
            <Text>{task.description}</Text>

            <RemoveButton
              onClick={() => dispatch(tasks.actions.removeTask(task.id))}
            >
              <GoX />
            </RemoveButton>
          </TextContainer>
          <Time>{moment(task.createdAt).fromNow()}</Time>
        </TaskItem>
      ))}
    </TaskList>
  );
};

export default TasksList;
