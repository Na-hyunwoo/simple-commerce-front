import styled from "styled-components";
import { PRIMARY } from "../styles";

interface Props {
  label: string,
  onClick: () => void,
}

const Button = (props: Props) => {

  const { label, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <Label>{label}</Label>
    </Wrapper>
  ); 
}

export default Button;

const Wrapper = styled.button`
  width: 100%;
  padding: 16px 0px;

  border: 0;
  background: ${PRIMARY};
  border-radius: 8px;

  cursor: pointer;
`;

const Label = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #FFF;
`;