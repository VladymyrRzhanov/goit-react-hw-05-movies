import styled from 'styled-components';

export const List = styled.ul`
margin-bottom: 20px;
@media screen and (min-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  margin: 5px;
`
export const VideoContainer = styled.iframe`
width: 100%;
height: auto;
`;