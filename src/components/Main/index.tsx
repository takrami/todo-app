import React from "react";

import AddTask from "../AddTask";
import Header from "../Header";

import { MainContainer } from "./style";

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <AddTask />
    </MainContainer>
  );
};

export default Main;
