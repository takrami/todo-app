import React, { useState } from "react";
import { useDispatch } from "react-redux";

import tasks from "../../reducers/tasks";

import { NewTask } from "./style";

const AddTask = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(value);
    const newTask = {
      description: value,
      isComplete: false,
    };

    dispatch(tasks.actions.addTask(newTask));
    setValue("");
  };

  return (
    <>
      <NewTask>new task</NewTask>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
    </>
  );
};

export default AddTask;
