import axios from 'axios'

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
})

export const getAllProducts = async (): Promise<Product[]> => {
  const products = await instance.get<Product[]>('/products')

  return products.data
}

export const getProductById = async(id: number): Promise<Product> => {
  const product = await instance.get<Product>(`/products/${id}`);


  return product.data;
}