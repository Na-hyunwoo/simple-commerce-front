import styled from "styled-components";
import ProductDetail from "../components/ProductDetail";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { cartProductListState } from "../store/product";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

interface CardProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
  count: number,
}

const ProductDetailPage = () => {
  const location = useLocation();
  const productDetail = {...location.state};

  const [cartProductList, setCartProductList] = useRecoilState<CardProductType[]>(cartProductListState);

  // product가 중복으로 생성되는 것을 막기위한 로직입니다. 
  const productIds = cartProductList.map((product) => product.id);
  const isInCart = productIds.includes(productDetail.id) ?? false;
  const buttonLabel = isInCart ? "장바구니 빼기" : "장바구니 담기";
  
  const handleClick = () => {
    if (buttonLabel === "장바구니 담기") {
      setCartProductList((prev) => [
        ...prev, 
        {
          ...productDetail,
          count: 1,
        }
      ]);
    } else {
      const productList = cartProductList;
      const deletedProductList = productList.filter((product) => 
        product.id !== productDetail.id
      );

      setCartProductList(deletedProductList);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, []);

  return (
    <Wrapper>
      <ProductDetail 
        {...productDetail}
      />
      <ButtonWrapper>
        <Button 
          label={buttonLabel}
          onClick={handleClick}  
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ProductDetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  height: 900px;

  padding: 0px 18px 24px 18px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  width: calc(100% - 36px);
`;