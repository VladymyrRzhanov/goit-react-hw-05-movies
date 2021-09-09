import styled from 'styled-components';
import { ReactComponent as Arrow } from "../../images/arrow.svg";

export const ArrowToTop = styled(Arrow)`
transform: rotate(-90deg);
`;

export const Button = styled.button`
  position: fixed;
  bottom: 60px;
  right: 50px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(60 180 231);
  // background-image: url(ArrowToTop);
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: contain;
  border: none;
  color: #fff;
  cursor: pointer;
  opacity: 0.7;
  
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

&:hover, &:focus {
  opacity: 1;
  transform: scale(1.1);
}
`;