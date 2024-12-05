import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product, Products } from './interfaces'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, string>({
      query: (limit) => `products?limit=${limit}`,
    }),
    getProductById: builder.query<Product, any>({
      query: (id: string) => `product/${id}`,
    }) 
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi