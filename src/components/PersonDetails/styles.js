import styled from 'styled-components';

export const Data = styled.div`
background-color: rgb(197, 197, 197);
  padding: 20px;
@media screen and (min-width: 768px) {
    display: flex;
  justify-content: center;
  align-items: flex-start;
  }  
`;

export const Poster = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 3px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const Image = styled.img`
  width: 100%;
    height: auto;
    display: block;
`;

export const Details = styled.div`
  // width: 700px;
  // display: flex;
  // flex-direction: column;
  // align-items: stretch;
`;

export const List = styled.ul`
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

&:not(:last-child) {
  margin-bottom: 25px;
}
`;

export const Meaning = styled.span`
  width: 30%;
  margin-right: 20px;
  font-size: 12px;
  font-weight: 700;
  text-align: left;
`;

export const Value = styled.span`
  width: 70%;
  text-align: left;
  font-size: 12px;
`;

export const OverviewTitle = styled.h3`
font-size: 14px;
margin-bottom: 10px;
`;

export const OverviewText = styled.p`
  text-align: left;
  font-size: 12px;
`;
