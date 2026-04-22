import { products } from './mockdata';

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function main(event: any) {
  return {
    message: `SUCCESS with message ${event.message}`,
  };
}

export async function getProductList() {
  return products;
}

export async function getProductsById(event: any) {
  return products.find((product) => product.id === event.productId);
}
