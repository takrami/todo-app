import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  font-weight: bold;
  color: #000060;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = styled.header`
  padding: 16px 0;
  display: flex;
  gap: 16px;
`;

const HeaderItems = styled.span`
  color: #000060;
`;

const RemoveButton = styled.button`
  border: 1px solid #f1f1f1;
  color: #c80000;
  border-radius: 5px;
  padding: 4px 8px;
`;

export { NavLink, NavContainer, HeaderContainer, HeaderItems, RemoveButton };
