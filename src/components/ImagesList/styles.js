import styled from 'styled-components';


export const Gallery = styled.ul`
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  
`;

export const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 2 * 10px) / 2);
  margin: 5px;
  border-radius: 2px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 4 * 10px) / 4);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 8 * 10px) / 8);
  }
`;

export const Card = styled.img`
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  width: 100%;
  height: 100%;
}

&:hover, &:focus {
  transform: scale(1.03);
  cursor: zoom-in;
}
`;
