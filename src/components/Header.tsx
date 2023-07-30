import styled from "styled-components";
import { Link } from "react-router-dom";

const Headerdiv = styled.div`
  border: 1px solid gray;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavSpan = styled.span`
  margin-right: 1.5em;
  color: black;
  &:hover {
    color: blue;
  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
`;

const HeaderP = styled.p`
  color: blue;
  margin-left: 1em;
  font-size: 2rem;
`;

export default function Header() {
  return (
    <Headerdiv>
      <HeaderP>운세 사이트</HeaderP>
      <div>
        <NavbarLink to="/Login">
          <NavSpan>Login</NavSpan>
        </NavbarLink>
        <NavbarLink to="/list">
          <NavSpan>list</NavSpan>
        </NavbarLink>
        <NavbarLink to="/bookmark">
          <NavSpan>bookmark</NavSpan>
        </NavbarLink>
        <NavbarLink to="/">
          <NavSpan>Home</NavSpan>
        </NavbarLink>
      </div>
    </Headerdiv>
  );
}
