import React, { useState } from "react";

import { NewTask } from "./style";

const AddTask = () => {
  const [value, setValue] = useState("");

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(value);
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
