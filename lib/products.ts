import axios, { AxiosError } from 'axios'
import { errorAxios } from './handlerError'

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

export const getAllProducts = async (): Promise<Product[] | string> => {
  try {
    const products = await instance.get<Product[]>('/products')

    return products.data
  } catch (er) {
    const axiosError = er as AxiosError
    const isError = errorAxios(axiosError)
    console.log(isError)
    return isError
  }
}

export const getProductById = async (id: number): Promise<Product | string> => {
  try {
    const product = await instance.get<Product>(`/products/${id}`)

    return product.data
  } catch (error) {
    console.log(error)
    return 'Ocurrio algo'
  }
}
