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
            isCompleted: !task.isCompleted,
          };
        } else {
          return task;
        }
      });
      store.items = updatedItems;
    },
    addTask: (store, action) => {
      // console.log(action);
      store.items = [...store.items, action.payload];
    },
    removeTask: (store, action) => {
      const updatedItems = store.items.filter(
        (task: any) => task.id !== action.payload
      );

      store.items = updatedItems;
    },
  },
});

export default tasks;
