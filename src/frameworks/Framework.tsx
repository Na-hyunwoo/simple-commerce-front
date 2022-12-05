import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { TITLE } from "../styles";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api/product";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, productListState } from "../store/product";
import { Cart } from "../assets/svgComponents/icon";

const FrameWork = () => {

  const setProductList = useSetRecoilState(productListState);
  const [page, setPage] = useRecoilState<number>(pageState);
  const [loading, setLoading] = useState<boolean>(false);


  const getData = async () => {

    const { data, status } = await getProducts(page);

    // setPage((prev) => prev + 1);

    if (status === 200) {
      setProductList(data);
    }

    setLoading(true);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Header>
        {"나현우"}
        <CartButton />
      </Header>
      {loading && <Outlet />}
    </Wrapper>
  )
}

export default FrameWork;

const Wrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;

  background: #F2F2F2;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 0px;
  position: relative;

  ${TITLE};
`;

const CartButton = styled(Cart)`
  position: absolute;
  top: 25px;
  right: 16px;
`;