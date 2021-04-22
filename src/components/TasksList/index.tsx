import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import tasks from "../../reducers/tasks";

const TasksList = () => {
  const items = useSelector((store: any) => store.items);

  const dispatch = useDispatch();

  if (items.length > 0) {
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

            {moment(task.createdAt).fromNow()}
            <button onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
              remove
            </button>
          </div>
        ))}
      </div>
    );
  }
  return <div>there</div>;
};

export default TasksList;
