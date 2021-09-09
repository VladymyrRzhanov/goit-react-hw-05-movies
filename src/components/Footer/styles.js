import styled from 'styled-components';

export const CustomFooter = styled.footer`
  padding: 10px 0;
  flex: 0 0 auto;
  width: 100%;
  box-shadow: 0px -7px 33px -3px rgb(236 236 236 / 20%);
  border-top: 1px solid rgb(245 245 245);
`;

export const Copyright = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const Name = styled.span`
font-size: 14px;
`;

export const Profile = styled.img`
  width: 30px;

  &:hover ~ ${Name} {
  opacity: 1;
}
`;

export const Link = styled.a`
  text-decoration: none;
`;


