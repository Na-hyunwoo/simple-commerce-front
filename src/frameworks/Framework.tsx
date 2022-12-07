import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api/product";
import { useSetRecoilState } from "recoil";
import { productListState } from "../store/product";
import LoadingContainer from "../containers/LoadingContainer";
import HeaderContainer from "../containers/HeaderContainer";

const FrameWork = () => {

  const setProductList = useSetRecoilState(productListState);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  
  const getData = async () => {

    const { data, status } = await getProducts(1);

    if (status === 200) {
      setProductList(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    if(!loading) navigate("/list");
  }, [loading]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <HeaderContainer />
      {loading && <LoadingContainer />}
      {!loading && <Outlet />}
    </Wrapper>
  )
}

export default FrameWork;

const Wrapper = styled.div`
  max-width: 420px;
  min-height: 900px;
  margin: 0 auto;

  background: #F2F2F2;
`;



