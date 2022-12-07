import { atom } from "recoil";

interface ProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
  count?: number,
}

export const productListState = atom<ProductType[]>({
  key: "productListState",
  default: undefined,
})

export const pageState = atom<number>({
  key: "pageState",
  default: 1,
})

interface CardProductType {
  id: number,
  productName: string,
  image: string,
  price: number,
  description: string,
  tags: string[],
  count: number,
}

export const cartProductListState = atom<CardProductType[]>({
  key: "cartProductListState",
  default: [],
})
