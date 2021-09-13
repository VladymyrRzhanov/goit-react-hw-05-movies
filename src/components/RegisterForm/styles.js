import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

export const CustomForm = styled(FormControl)`
    width: 220px;
    margin: 10px;

@media screen and (min-width: 768px) {
    width: 430px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

export const InputContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const InputStyle = styled.input`
  width: 300px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
`;

export const Subtitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button`
  background-color: rgb(51 147 216);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BtnText = styled.span`
  margin-right: 10px;
  font-weight: 700;
  font-size: 16px;
`;