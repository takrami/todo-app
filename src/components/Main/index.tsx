import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/completed-tasks">Done</Link>
    </MainContainer>
  );
};

export default Main;
