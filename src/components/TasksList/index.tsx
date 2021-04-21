import React from "react";
import { useSelector } from "react-redux";

import tasks from "../../reducers/tasks";

const TasksList = () => {
  const items = useSelector((store: any) => store.tasks.items);

  console.log(tasks);

  return (
    <div>
      {items.map((task: any) => (
        <div key={task.id} className="task-item">
          <p>{task.description}</p>
          <input type="checkbox" checked={task.isComplete} />
        </div>
      ))}
    </div>
  );
};

export default TasksList;
