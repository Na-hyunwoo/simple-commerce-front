import styled from "styled-components";
import { Minus, Plus } from "../assets/svgComponents/icon";
import { BODY3 } from "../styles";

interface Props {
  count: number,
  handlePlus: () => void,
  handleMinus: () => void
}

const Counter = (props: Props) => {

  const { count, handlePlus, handleMinus } = props;

  return (
    <Wrapper>
      <MinusButton 
        disabled={count <= 1}
        onClick={handleMinus}
      >
        <Minus />
      </MinusButton>
      <Count>{count}</Count>
      <PlusButton 
        disabled={count >= 99}
        onClick={handlePlus}
      >
        <Plus />
      </PlusButton>
    </Wrapper>
  );
}

export default Counter;

const Wrapper = styled.div`
  display: flex;

  border: 1px solid #BDBDBD;
  border-radius: 4px;

  margin-top: 8px;
`;

const MinusButton = styled.button<{disabled: boolean}>`
  cursor: pointer;

  border-radius: 4px 0px 0px 4px;
  border: 0;
  height: 16px;

  background: ${({disabled}) => disabled ? "#BDBDBD" : "none"};
`;

const PlusButton = styled.button<{disabled: boolean}>`
  cursor: pointer;

  border-radius: 0px 4px 4px 0px;
  border: 0;
  height: 16px;

  background: ${({disabled}) => disabled ? "#BDBDBD" : "none"};
`;

const Count = styled.p`
  ${BODY3};
  padding: 0.5px 8px;
`;