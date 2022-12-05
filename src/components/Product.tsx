import styled from "styled-components";
import { BODY1, PRIMARY, SUBTITLE } from "../styles";
import Tag from "./Tag";
import Counter from "./Counter";
import useCounter from "../hooks/useCounter";

interface Props {
  name: string,
  price: number,
  image: string,
  tag: string,
  isShoppingBasket?: boolean,
}

const Product = (props: Props) => {

  const {name, price, image, tag, isShoppingBasket} = props;
  const KRW = Intl.NumberFormat().format(price);

  const {count, handlePlus, handleMinus} = useCounter();

  return (
    <Wrapper>
      <Img 
        src={image}
        alt={name}
      />
      <Name>{name}</Name>
      <Body>
        <Price>{`${KRW}원`}</Price>
        <Tag label={tag}/>
      </Body>
      <CounterContainer>
        {isShoppingBasket && (
          <Counter 
            count={count}
            handlePlus={handlePlus}
            handleMinus={handleMinus}
          />
        )}
      </CounterContainer>
    </Wrapper>
  );
}

export default Product;

const Wrapper = styled.div`
  background: #FFF;

  display: flex;
  flex-direction: column;

  width: 152px;
  margin: 0 auto;

  padding: 16px;
  border-radius: 8px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;

  border-radius: 8px;

  margin-bottom: 8px;
`;

const Body = styled.div`
  display: flex;
`;

const Name = styled.p`
  ${SUBTITLE};
  margin-bottom: 5px;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 7px;

  ${BODY1};
  color: ${PRIMARY};
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;