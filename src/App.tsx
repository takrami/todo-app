import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import Main from "./components/Main";
import CompletedTask from "./pages/CompletedTask";

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
