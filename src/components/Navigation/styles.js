import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SaitLogo } from "../../images/logo.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(SaitLogo)`
  width: 200px;
  height: 50px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  list-style: none;

&:not(:last-child) {
  margin-right: 50px;
}
`;

export const MenuLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  padding: 23px 0;
  font-size: 18px;
  color: rgb(255 255 255);
  line-height: 14px;
  letter-spacing: 0.4px;

& .activeLink {
  color: rgb(60 180 231);
}

&::after,
& .activeLink::after {
  content: "";
  position: absolute;
  width: 100%;
  top: 10px;
  left: 0;
  height: 2px;
  background-color: rgb(60 180 231);
  opacity: 0;
}

& .activeLink::after {
  opacity: 1;
}

&:hover,
&:focus {
  color: rgb(125 125 125);
}

&:hover::after,
&:focus::after {
  opacity: 1;
  background-color: rgb(125 125 125);
}
`;