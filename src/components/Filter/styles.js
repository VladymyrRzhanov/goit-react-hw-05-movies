import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 25%;
  margin-right: 30px;
  padding: 10px 15px;
  font-size: 20px;
`;

export const Button = styled.button`
  display: block;
  font-size: 20px;
  padding: 10px 25px;
  cursor: pointer;
  color: #fff;
  background-color: rgb(60 180 231);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

&:hover,
&:focus {
  background-color: rgb(4 133 187);
}
`;
