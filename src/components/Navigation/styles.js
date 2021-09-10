import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SaitLogo } from "../../images/logo.svg";
import { ReactComponent as SaitLogoMob } from "../../images/logomob.svg";

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

export const LogoMob = styled(SaitLogoMob)`
width: 30px;
height: 30px;
@media screen and (min-width: 768px) {
  display: none;
  }
`;

export const LogoBig = styled(SaitLogo)`
display: none;
@media screen and (min-width: 768px) {
  display: block;
  width: 150px;
  height: 40px;
  }

@media screen and (min-width: 1200px) {
  display: block;
  width: 200px;
  height: 50px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  list-style: none;

&:not(:last-child) {
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 50px;
  }
}
`;

export const MenuLink = styled(NavLink)`
  position: relative;
  display: block;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  color: rgb(255 255 255);
  line-height: 14px;
  letter-spacing: 0.4px;
  @media screen and (min-width: 768px) {
    padding: 23px 0;
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    padding: 23px 0;
    font-size: 18px;
  }

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