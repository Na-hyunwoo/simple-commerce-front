import styled from "styled-components";
import { BODY3, SECONDARY } from "../styles";

interface Props {
  label: string,
}

const Tag = (props: Props) => {

  const { label } = props;

  return (
    <Wrapper>
      <Label>{label}</Label>
    </Wrapper>
  )
};

export default Tag;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 57px;

  padding: 4px 8px;

  border-radius: 8px;

  background: ${SECONDARY};
`;

const Label = styled.p`
  ${BODY3};
  color: #FFF;
`;