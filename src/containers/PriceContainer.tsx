import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartProductListState } from "../store/product";
import { BODY1, PRIMARY, TITLE } from "../styles";

interface ProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
  count?: number,
}

const PriceContainer = () => {
  const cartProductList = useRecoilValue<ProductType[]>(cartProductListState);
  const totalPrice = cartProductList
    .map((product) => (product.price * (product.count ?? 1)))
    .reduce((acc, cur) => (acc + cur) ,0);
  
  const KRW = Intl.NumberFormat().format(totalPrice);

  return (
    <Wrapper>
      <Label>{"총 결제 금액"}</Label>
      <TotalPrice>{KRW}</TotalPrice>
    </Wrapper>
  );
}

export default PriceContainer;

const Wrapper = styled.div`
  padding: 32px 32px 0px;

  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  ${BODY1};
`;

const TotalPrice = styled.p`
  ${TITLE};
  color: ${PRIMARY};
`;