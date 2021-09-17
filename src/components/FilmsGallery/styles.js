import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as FavIcon } from "../../images/favourite.svg";
import { ReactComponent as EyeIcon } from "../../images/tv.svg";

export const Gallery = styled.ul`
padding-bottom: 30px;
@media screen and (min-width: 768px) {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -5px;
}
@media screen and (min-width: 1200px) {
  margin: -15px;
}
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
`;

export const Item = styled.li`
@media screen and (min-width: 768px) {  
  display: flex;
  flex-basis: calc((100% - 4 * 10px) / 4);
  margin: 5px;
  border-radius: 2px;
}
@media screen and (min-width: 1200px) {  
  display: flex;
  flex-basis: calc((100% - 5 * 10px) / 5);
  margin: 5px;
  border-radius: 2px;
}
`;

// export const Card = styled.div`
//   position: relative;
//   overflow: hidden;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   object-fit: contain;
//   overflow: hidden;
//   filter: drop-shadow(4px 4px 4px rgba(140, 140, 140, 0.6));
//   box-shadow: 0 0 20px hsl(0deg 0% 55% / 50%);
//   cursor: pointer;
// `;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 5px;
  object-fit: contain;
  overflow: hidden;
  filter: drop-shadow(4px 4px 4px rgba(140, 140, 140, 0.6));
  box-shadow: 0 0 20px hsl(0deg 0% 55% / 50%);
`;

export const GalleryImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
  transform: scale(1.2);
}
`;

// export const Title = styled.p`
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 1.17;
//   text-transform: uppercase;
//   color: #000;
// `;

export const BtnContainer = styled.div`
// position: absolute;
// display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//   width: 100%;
//   height: 30px;
//   bottom: 0;
//   left: 0;
//   padding: 20px 24px;
//   color: $white-color;
//   background-color: rgb(181 181 181 / 63%);
  position: absolute;
  display: flex;
  flex-direction: column;
     align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    bottom: 0;
    right: 0;
    padding: 5px 0;
`;

export const Favorite = styled(FavIcon)`
width: 30px;
height: 30px;
fill: rgb(255 129 0);
`;

export const Viewed = styled(EyeIcon)`
width: 30px;
height: 30px;
fill: rgb(255 129 0);
`;

export const BtnLib = styled.button`
border: none;
background: transparent;
cursor: pointer;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  transform: scale(1.2)
}
`;