import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Play } from "../../images/play.svg";

export const Data = styled.div`
  margin-bottom: 30px;
  
  @media screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  }
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
  white-space: nowrap;
  text-indent: 100%;
  border-radius: 3px;
  object-fit: cover;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-bottom: 20px;

&:hover, &:focus {
  opacity: 0.7;
}
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1199px) {
    margin-right: 30px;
  }
`;

export const PosterImg = styled.img`
width: 100%;
display: block;
height: auto;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
      font-size: 30px;
  }
`;

export const Tagline = styled.h2`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
      font-size: 18px;
      margin-bottom: 40px;
  }
`;

export const Details = styled.div`
   @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin-bottom: 20px;
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
  width: 30%;
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  @media screen and (min-width: 768px) {
    width: 40%;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
      font-size: 16px;
  }
`;

export const Value = styled.span`
  width: 70%;
  font-size: 12px;
  text-align: left;
  word-wrap: break-word;
  @media screen and (min-width: 768px) {
    width: 60%;
    font-size: 14px;

  @media screen and (min-width: 768px) {
      font-size: 16px;
  }
`;

export const OverviewTitle = styled.h3`
  margin-bottom: 20px;
`;

export const OverviewText = styled.p`
  text-align: left;
  font-size: 12px;

  @media screen and (min-width: 768px) {
      font-size: 14px;
  }
  
  @media screen and (min-width: 768px) {
      font-size: 16px;
  }
`;

export const Info = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const InfoItem = styled.li`
  list-style: none;

&:not(:last-child) {
  margin-right: 10px;
}
`;

export const LinkInfo = styled(NavLink)`
  display: inline-block;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 0;
  font-size: 10px;
  color: rgb(0 0 0);
  line-height: 14px;
  letter-spacing: 0.4px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

& .activeLinkInfo {
  color: rgb(60 180 231);
}

&:hover,
&:focus {
  color: rgb(60 180 231);
}
`;

export const ButtonContainer = styled.div`
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