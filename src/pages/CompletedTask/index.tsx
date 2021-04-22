import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "../../reducers/tasks";

const CompletedTask = () => {
  // const items = useSelector((store: any) => store.tasks.items);
  const dispatch = useDispatch();

  const completedTask = dispatch(tasks.actions.getCompletedTasks());
  // console.log(completedTask);

  return <>done</>;
};

export default CompletedTask;
