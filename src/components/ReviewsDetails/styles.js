import styled from 'styled-components';

export const Gallery = styled.ul`
  text-align: justify;
  font-size: 12px;
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
`;

export const Author = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-align: right;
`;
