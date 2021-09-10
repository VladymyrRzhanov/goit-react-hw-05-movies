import styled from 'styled-components';

export const CustomFooter = styled.footer`
  padding: 10px 0;
  flex: 0 0 auto;
  width: 100%;
  text-align: center;
  box-shadow: 0px -7px 33px -3px rgb(236 236 236 / 20%);
  border-top: 1px solid rgb(245 245 245);
`;

export const Copyright = styled.p`
  line-height: 1.5;
  color: rgb(0 0 0);
  font-size: 14px;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }  
`;

// export const Profile = styled.img`
//   width: 30px;

//   &:hover ~ ${Name} {
//   opacity: 1;
// }
// `;

export const Link = styled.a`
  text-decoration: none;
  color: rgb(0 0 0);
  margin-left: 5px;
`;


