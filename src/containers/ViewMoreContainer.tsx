import styled from "styled-components";
import { BODY2, GRAY } from "../styles";
  

interface Props {
  onClick: () => void,
  label: string,
}

const ViewMoreContainer = (props: Props) => {

  const { onClick, label } = props;

  return (
    <Wrapper>
      <ViewMore onClick={onClick}>{label}</ViewMore>
    </Wrapper>
  );
}

export default ViewMoreContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
`;

const ViewMore = styled.button`
  cursor: pointer;

  border-radius: 8px;
  padding: 4px 8px;
  border: 0;

  background: ${GRAY.gray1};
  ${BODY2};
  color: #FFF;
`;