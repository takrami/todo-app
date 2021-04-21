import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: [] as any,
  },
  reducers: {
    addTask: (store, action) => {
      console.log(action);
      store.items = [...store.items, action.payload];
    },
  },
});

export default tasks;
