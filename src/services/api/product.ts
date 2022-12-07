import axios from "axios";
import { apiInstance } from ".";

interface ProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
};

interface GetProductsResponse {
  data: ProductType[],
  status: number,
};

export const getProducts = async (page: number) : Promise<GetProductsResponse> => {
  
  const url = `http://localhost:8000/products?_page=${page}&_limit=10`;

  return await apiInstance
    .get<GetProductsResponse>(url)
    .then(({data, status}) => {
      return {data, status};
    })
    .catch((error) => {
      alert("오류입니다.");
      // getProducts(page);
      return error.message;
    });
};

interface GetProductResponse {
  data: ProductType,
  status: number,
};

export const getProductDetail = async (id: number) : Promise<GetProductResponse> => {

  const url = `http://localhost:8000/products/${id}`;

  return await apiInstance
    .get<GetProductResponse>(url)
    .then(({data, status}) => {
      return {data, status};
    })
    .catch((error) => {
      alert("오류입니다.");
      return error.message;
    });

}