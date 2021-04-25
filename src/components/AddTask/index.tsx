import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";

import { Task } from "../../types";
import tasks from "../../redux/tasksSlice";

import { AddTaskForm, AddTaskInput, AddTaskButton } from "./style";

const AddTask: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedValue = value.trim();

    if (!normalizedValue) {
      return;
    }

    const newTask: Task = {
      id: uuidv4(),
      description: normalizedValue,
      isCompleted: false,
      createdAt: Date.now(),
    };

    dispatch(tasks.actions.addTask(newTask));
    setValue("");
  };

  return (
    <>
      <AddTaskForm onSubmit={onFormSubmit}>
        <AddTaskInput
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <AddTaskButton type="submit">
          <FaPlus />
        </AddTaskButton>
      </AddTaskForm>
    </>
  );
};

export default AddTask;
