import { createSlice } from "@reduxjs/toolkit";

import { Task } from "../types";

const initialState = {
  tasks: [] as Task[],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems: Task[] = store.tasks.map((task: Task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        } else {
          return task;
        }
      });
      store.tasks = updatedItems;
    },

    addTask: (store, action) => {
      store.tasks = [...store.tasks, action.payload];
    },

    removeTask: (store, action) => {
      const updatedItems = store.tasks.filter(
        (task: Task) => task.id !== action.payload
      );

      store.tasks = updatedItems;
    },

    removeAllTask: (store) => {
      store.tasks = [];
    },
  },
});

export default tasksSlice;
