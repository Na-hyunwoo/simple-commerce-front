import styled from "styled-components";
import { pageState, productListState } from "../store/product";
import { useRecoilState } from "recoil";
import Product from "../components/Product";
import { useEffect, useRef, useState } from "react";
import { getProductDetail, getProducts } from "../services/api/product";
import { Loading } from "../assets/svgComponents/icon";
import { useNavigate } from "react-router-dom";

interface ProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
}

const ProductListPage = () => {

  const [productList, setProductList] = useRecoilState<ProductType[]>(productListState);
  const [page, setPage] = useRecoilState<number>(pageState);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleClick = async (id: number) => {
    setLoading(true);
    try {
      const { data, status } = await getProductDetail(id);

      if (status === 200) {
        navigate(`/products/${data.id}`, {
          state: {
            ...data
          }
        });
      }
    } finally {
      setLoading(false);
    } 
  };

  const updateProducts = async () => {
    setLoading(true);
    try {
      const { data, status } = await getProducts(page);

      // product가 중복으로 생성되는 것을 막기위한 로직입니다. 
      const productIds = productList.map((product) => product.id);
      const dataIds = data.map((product) => product.id);
      const intersection = dataIds.filter((id) => !productIds.includes(id))

      if (status === 200 && intersection.length > 0) {
        setProductList((prev) => [...prev, ...data]);
      }
    } finally {
      setLoading(false);
    } 
  };

  const ref = useRef<HTMLDivElement>(null);

  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
  };

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    })
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, option);
    observer.observe(ref.current);

    return () => observer.disconnect()
  }, []);

  useEffect(() => {
    if(page !== 1) updateProducts();
  }, [page]);

  return (
    <Wrapper>
      {productList.map((product) => (
        <Product 
          key={product.id}
          id={product.id}
          productName={product.productName}
          price={product.price}
          image={product.image}
          tag={product.tags[0]}
          handleProductClick={() => handleClick(product.id)}
          isInCart={false}
        />
      ))}
      <MockElement ref={ref}/>
      {loading && <Loading/>}
    </Wrapper>
  );
}

export default ProductListPage;

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: 32px;
`;

const MockElement = styled.div``;