import styled from "styled-components";

const TaskList = styled.ul`
  margin-top: 32px;
`;

const TaskItem = styled.li`
  display: grid;
  border: 1px solid #d7e0e8;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 5px;
  padding: 8px;
  gap: 8px;
  button {
    margin-left: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
`;

const Text = styled.p`
  padding-left: 8px;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  color: #c80000;
`;

const Time = styled.time`
  text-align: right;
  font-size: 0.8em;
  color: #333;
`;

export { TaskList, TaskItem, TextContainer, Text, RemoveButton, Time };
