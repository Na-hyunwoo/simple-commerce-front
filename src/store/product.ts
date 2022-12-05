import { atom } from "recoil";
import { getProducts } from "../services/api/product";

interface ProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
}

export const productListState = atom<ProductType[]>({
  key: "productListState",
  default: undefined,
})

export const pageState = atom<number>({
  key: "pageState",
  default: 1,
})