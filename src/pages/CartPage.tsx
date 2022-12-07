import styled from "styled-components";
import CartProductListContainer from "../containers/CartProductListContainer";
import PriceContainer from "../containers/PriceContainer";

const CartPage = () => {

  return (
    <Wrapper>
      <CartProductListContainer />
      <PriceContainer />
    </Wrapper>
  ); 
}

export default CartPage;

const Wrapper = styled.div`
  height: 900px;
`;




