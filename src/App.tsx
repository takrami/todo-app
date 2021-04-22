import React from "react";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Switch, Route } from "react-router-dom";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import tasks from "./reducers/tasks";

import Main from "./components/Main";
import CompletedTask from "./pages/CompletedTask";

// const store = configureStore({ reducer });
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, tasks.reducer);

let store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/completed-tasks" component={CompletedTask} />
        </Switch>
      </PersistGate>
    </Provider>
  );
};

export default App;
