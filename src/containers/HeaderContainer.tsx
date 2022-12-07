import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartProductListState} from "../store/product";
import { useLocation, useNavigate } from "react-router-dom";
import { BODY3, PRIMARY, TITLE } from "../styles";
import { Back, Cart } from "../assets/svgComponents/icon";

interface CardProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
  count: number,
}

const HeaderContainer = () => {

  const cartProductList = useRecoilValue<CardProductType[]>(cartProductListState);
  const cartQuantity = cartProductList.length;

  const location = useLocation();
  const path = location.pathname;

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <Header>
      {path !== "/list" && <BackButton onClick={handleBackClick}/>}
      {"나현우"}
      {path !== "/cart" && (
        <>
          <CartButton onClick={handleCartClick}/>
          {cartQuantity > 0 && 
            <Quantity>{cartQuantity}</Quantity>}
        </>
      )}
    </Header>
  );
}

export default HeaderContainer;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 0px;
  position: relative;

  ${TITLE};
`;

const CartButton = styled(Cart)`
  cursor: pointer;

  position: absolute;
  top: 25px;
  right: 16px;
`;

const Quantity = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 50%;
  background: ${PRIMARY};
  ${BODY3};
  color: #FFF;

  position: absolute;
  top: 22px;
  right: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled(Back)`
  cursor: pointer;

  position: absolute;
  top: 25px;
  left: 16px;
`;

