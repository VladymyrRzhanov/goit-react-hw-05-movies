import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export const Container = styled.div`
display: none;

 @media screen and (min-width: 768px) {
    display: flex;
justify-content: center;
align-items: center;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  padding: 5px 0;
  font-size: 12px;
  color: rgb(125 125 125);
  line-height: 14px;
  letter-spacing: 0.4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }

& .activeLink {
  color: rgb(60 180 231);
}

&:hover,
&:focus {
  color: black;
}
`;

export const LogOutButton = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
`;

export const IconOut = styled(ExitToAppOutlinedIcon)`
color: rgb(254 128 0);
`;