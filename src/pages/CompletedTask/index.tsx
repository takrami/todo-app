import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "../../reducers/tasks";

const CompletedTask = () => {
  const items = useSelector((store: any) => store.items);

  const dispatch = useDispatch();

  return items.map((task: any) => {
    if (task.isCompleted) {
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
    } else {
      return null;
    }
  });
};

export default CompletedTask;
