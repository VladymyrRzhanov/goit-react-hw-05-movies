import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Play } from "../../images/play.svg";

export const Card = styled.div`
  padding: 0 100px;
`;

export const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const BtnPlay = styled(Play)`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Poster = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin-right: 100px;
  white-space: nowrap;
  text-indent: 100%;
  border-radius: 3px;
  object-fit: cover;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

&:hover, &:focus {
  opacity: 0.7;
}
`;

export const PosterImg = styled.img`
width: 100%;
display: block;
height: auto;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
`;

export const Tagline = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const Details = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const List = styled.ul`
  width: 500px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

&:not(:last-child) {
  margin-bottom: 25px;
}
`;

export const Meaning = styled.span`
  width: 110px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
`;

export const Value = styled.span`
  text-align: left;
`;

export const OverviewTitle = styled.h3`
  margin-bottom: 20px;
`;

export const OverviewText = styled.p`
  text-align: left;
  margin-bottom: 40px;
`;

export const Info = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;

export const InfoItem = styled.li`
  list-style: none;

&:not(:last-child) {
  margin-right: 50px;
}
`;

export const LinkInfo = styled(NavLink)`
  display: inline-block;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  padding: 23px 15px;
  font-size: 18px;
  color: rgb(0 0 0);
  line-height: 14px;
  letter-spacing: 0.4px;

& .activeLinkInfo {
  color: rgb(60 180 231);
}

&:hover,
&:focus {
  color: rgb(60 180 231);
}
`;

export const ButtonContainer = styled.div`
  width: 180px;
  margin-right: auto;
  margin-bottom: 30px;
`;

// export const ButtonPlay = styled(Button)`
//   position: absolute;
//   top: -40px;
//   left: 115px;
//   padding: 4px 10px;
//   margin: 0 auto;
//   border-radius: 2px;
//   background-color: rgb(60 180 231);
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   text-align: center;
//   display: block;
//   color: #fff;
//   border: 0;
//   text-decoration: none;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 14px;
//   line-height: 24px;
//   font-style: normal;
//   font-weight: 500;
//   min-width: 100px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

// &:hover,
// &:focus {
//   background-color: rgb(4 133 187);
// }
// `;