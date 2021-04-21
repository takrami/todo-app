import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import tasks from "./reducers/tasks";

import Main from "./components/Main";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
