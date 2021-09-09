import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -15px;
`;

export const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 8 * 10px) / 8);
  margin: 10px;
  border-radius: 2px;

  &:not(:last-child) {
  margin-bottom: 60px;
}
`;

export const Card = styled.div`
  height: 300px;
  width: 200px;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
  transform: scale(1.03);
}
`;

export const Container = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  object-fit: cover;
  overflow: hidden;
  filter: drop-shadow(4px 4px 4px rgba(140, 140, 140, 0.6));
  box-shadow: 0 0 20px hsl(0deg 0% 55% / 50%);
`;

// export const img {
//   display: block;
//   width: 100%;
//   height: 100%;
// }

export const Name = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
`;

export const Character = styled.p`
  font-size: 14px;
`;
