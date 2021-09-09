import styled from 'styled-components';

export const Gallery = styled.ul`
  padding: 0 100px;
  text-align: left;
`;

export const Item = styled.li`
&:not(:last-child) {
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(189, 187, 187);
}
`;

export const Content = styled.p`
  margin-bottom: 20px;
`;

export const Author = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-align: right;
`;
