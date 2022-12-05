import styled from "styled-components";
import { pageState, productListState } from "../store/product";
import { useRecoilState } from "recoil";
import Product from "../components/Product";
import React, { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/api/product";
import { Loading } from "../assets/svgComponents/icon";

interface ProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
}

const ProductListContainer = () => {

  const [productList, setProductList] = useRecoilState<ProductType[]>(productListState);
  const [page, setPage] = useRecoilState<number>(pageState);

  const [loading, setLoading] = useState(false);

  const updateProducts = async () => {
    const plusedPage = page + 1;
    setPage(plusedPage);

    const { data, status } = await getProducts(plusedPage);

    // console.log(data);

    if (status === 200) {
      setProductList((prev) => [...prev, ...data]);
    }

    setLoading(true);
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
        await updateProducts();
      }
    })
  };

  // useEffect(() => {
  //   console.log(page);
  // }, [page]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, option);
    observer.observe(ref.current);

    return () => observer.disconnect()
  }, []);

  return (
    <Wrapper>
      {productList.map((product) => (
        <Product 
          key={product.id}
          name={product.productName}
          price={product.price}
          image={product.image}
          tag={product.tags[0]}
        />
      ))}
      <MockElement ref={ref}/>
      {loading && <Loading/>}
    </Wrapper>
  );
}

export default ProductListContainer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: 32px;
`;

const MockElement = styled.div``;