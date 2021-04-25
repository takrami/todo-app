import React from "react";

import AddTask from "../AddTask";
import Header from "../Header";
import TasksList from "../TasksList";

import { MainContainer } from "./style";

const Main: React.FunctionComponent = () => {
  return (
    <MainContainer>
      <Header />
      <AddTask />
      <TasksList />
    </MainContainer>
  );
};

export default Main;
