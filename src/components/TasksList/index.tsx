import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "../../reducers/tasks";

const TasksList = () => {
  const items = useSelector((store: any) => store.tasks.items);

  const dispatch = useDispatch();

  return (
    <div>
      {items.map((task: any) => (
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
      ))}
    </div>
  );
};

export default TasksList;
