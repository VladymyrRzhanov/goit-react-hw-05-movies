import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';


export const LibraryLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  padding: 23px 0;
  font-size: 12px;
  color: rgb(255 255 255);
  line-height: 14px;
  letter-spacing: 0.4px;
  margin-right: 30px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
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


export const Logout = styled(ExitToAppOutlinedIcon)`
color: rgb(51 147 216);
cursor: pointer;
`;