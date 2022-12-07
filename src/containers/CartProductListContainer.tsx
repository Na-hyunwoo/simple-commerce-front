import styled from "styled-components";
import Product from "../components/Product";
import { useRecoilValue } from "recoil";
import { cartProductListState } from "../store/product";
import { count } from "console";

const CartProductListContainer = () => {

  const cartProductList = useRecoilValue(cartProductListState);

  return (
    <GridWrapper>
      {cartProductList.map((product) => (
        <Product 
          key={product.id}
          id={product.id}
          productName={product.productName}
          price={product.price}
          image={product.image}
          tag={product.tags[0]}
          isInCart={true}
          initialCount={product.count}
        />
      ))}
    </GridWrapper>
  )
}

export default CartProductListContainer;

const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: 32px;
`;