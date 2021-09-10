import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

&:not(:last-child) {
  margin-bottom: 20px;
}
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
  transform: scale(1.03);
}
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 5px;
  object-fit: contain;
  overflow: hidden;
  filter: drop-shadow(4px 4px 4px rgba(140, 140, 140, 0.6));
  box-shadow: 0 0 20px hsl(0deg 0% 55% / 50%);

  @media screen and (min-width: 768px) {
    height: 265px;
  }

  @media screen and (min-width: 1200px) {
    height: 345px;
  }
`;



export const GalleryImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  color: #000;
`;
