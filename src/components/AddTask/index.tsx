import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../types";
import tasks from "../../reducers/tasks";

import { NewTask } from "./style";

const AddTask: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      description: value,
      isCompleted: false,
      createdAt: Date.now(),
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <button type="submit">Add todo</button>
      </form>
    </>
  );
};

export default AddTask;
