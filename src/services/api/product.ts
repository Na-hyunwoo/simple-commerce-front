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
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return error;
      }
    });
};