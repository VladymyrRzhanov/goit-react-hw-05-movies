import styled from 'styled-components';

export const Gallery = styled.ul`
  
`;

export const Item = styled.li`
&:not(:last-child) {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(189, 187, 187);
}
`;

export const Content = styled.p`
  margin-bottom: 20px;
  text-align: left;
  font-size: 12px;

  @media screen and (min-width: 768px) {
      font-size: 14px;
  }

  @media screen and (min-width: 768px) {
      font-size: 16px;
  }
`;

export const Author = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-align: right;
`;
