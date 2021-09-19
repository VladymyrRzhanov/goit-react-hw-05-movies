import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 180px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 0;
  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1200px) {
    width: 48px;
    height: 48px;
  }

  &:hover {
  opacity: 1;

}
`;



export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 12px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
