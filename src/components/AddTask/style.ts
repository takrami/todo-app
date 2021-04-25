import styled from "styled-components";

const AddTaskForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const AddTaskInput = styled.input`
  border: 1px solid #d7e0e8;
  /* border-radius: 5px; */
  padding: 8px;
`;

const AddTaskButton = styled.button`
  color: #5775a0;
  font-size: 1em;
`;

export { AddTaskForm, AddTaskInput, AddTaskButton };
