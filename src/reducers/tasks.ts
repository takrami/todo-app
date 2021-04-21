import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: [] as any,
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map((task: any) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        } else {
          return task;
        }
      });
      store.items = updatedItems;
    },
    addTask: (store, action) => {
      console.log(action);
      store.items = [...store.items, action.payload];
    },
  },
});

export default tasks;
