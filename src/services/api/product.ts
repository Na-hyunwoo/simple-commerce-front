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
      if (axios.isAxiosError(error)) {
        alert("에러가 발생했습니다.");
        getProducts(page);

        console.log('error message: ', error.message);
        return error.message;
      } else {
        alert("에러가 발생했습니다.");
        getProducts(page);

        console.log('unexpected error: ', error);
        return error;
      }
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
      if (axios.isAxiosError(error)) {
        alert("에러가 발생했습니다.");
        getProductDetail(id);

        console.log('error message: ', error.message);
        return error.message;
      } else {
        alert("에러가 발생했습니다.");
        getProductDetail(id);

        console.log('unexpected error: ', error);
        return error;
      }
    });

}