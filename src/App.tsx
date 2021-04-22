import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Switch, Route } from "react-router-dom";

import tasks from "./reducers/tasks";

import Main from "./components/Main";
import CompletedTask from "./pages/CompletedTask";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });
const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/completed-tasks" component={CompletedTask} />
      </Switch>
    </Provider>
  );
};

export default App;
