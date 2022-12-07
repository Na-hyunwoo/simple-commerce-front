import styled from "styled-components";
import { BODY1, PRIMARY, SUBTITLE } from "../styles";
import Tag from "./Tag";
import Counter from "./Counter";
import useCounter from "../hooks/useCounter";
import { css } from "styled-components";
import { memo, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartProductListState } from "../store/product";

interface Props {
  id: number,
  productName: string,
  price: number,
  image: string,
  tag: string,
  isInCart: boolean,
  handleProductClick?: () => void,
  initialCount?: number,
}

const Product = (props: Props) => {

  const {id, productName, price, image, tag, isInCart, handleProductClick, initialCount} = props;
  const KRW = Intl.NumberFormat().format(price);

  // 근데 컴포넌트 안에서 전체 상태 변화 일으키는거 맞나. 
  const [cartProductList, setCartProductList] = useRecoilState(cartProductListState);

  const [count, setCount] = useState<number>(initialCount ?? 0);

  const handlePlus = () => {
    if (count <= 99) setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (count >= 2) setCount((prev) => prev - 1);
  };

  // 그러면 count를 전역으로 관리해야 하나. 
  useEffect(() => {
    if (isInCart) {
      const products = cartProductList;
      const newProducts = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: count
          }
        } else {
          return product;
        }
      })
      setCartProductList(newProducts);
    }
  }, [count]);

  return (
    <Wrapper onClick={handleProductClick} isInCart={isInCart}>
      <Img 
        src={image}
        alt={productName}
      />
      <Name>{productName}</Name>
      <Body>
        <Price>{`${KRW}원`}</Price>
        <Tag label={tag}/>
      </Body>
      <CounterContainer>
        {isInCart && (
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

const Wrapper = styled.li<{isInCart: boolean}>`
  background: #FFF;

  display: flex;
  flex-direction: column;

  width: 152px;
  height: max-content;
  margin: 0 auto;

  padding: 16px;
  border-radius: 8px;

  ${({isInCart}) => !isInCart && css`
    cursor: pointer;
  `}
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