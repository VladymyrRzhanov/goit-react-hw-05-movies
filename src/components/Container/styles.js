import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
