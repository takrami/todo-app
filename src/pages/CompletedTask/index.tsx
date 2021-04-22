import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "../../redux/tasksSlice";
import { Task, TaskStore } from "../../types";

const CompletedTask: React.FunctionComponent = () => {
  const items: Task[] = useSelector((store: TaskStore) => store.tasks);

  const dispatch = useDispatch();

  const completedTasks = items.filter((item: Task) => item.isCompleted);

  if (completedTasks.length === 0) {
    return <div>Go do your tasks</div>;
  }

  return (
    <>
      {completedTasks.map((task: Task) => {
        return (
          <div key={task.id} className="task-item">
            <p>{task.description}</p>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}
            />

            <button onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CompletedTask;
