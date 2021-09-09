import styled from 'styled-components';

export const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgb(197, 197, 197);
  padding: 20px;
`;

export const Poster = styled.div`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100%;
  border-radius: 3px;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
`;

export const Image = styled.img`
  width: 80%;
    height: auto;
    display: block;
`;

export const Details = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const List = styled.ul`
  width: 650px;
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
  width: 110px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
`;

export const Value = styled.span`
  text-align: left;
`;

export const OverviewText = styled.p`
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
`;
