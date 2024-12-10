import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Products } from "./interfaces";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, string>({
      query: (limit) => `products?limit=${limit}`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id: string) => `product/${id}`,
    }),
    getCategoryList: builder.query<string[], string>({
      query: () => `products/category-list`,
    }),
    getCategoryByName: builder.query<Products, string | null>({
      query: (name: string | null) => `products/category/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoryListQuery,
  useGetCategoryByNameQuery,
} = productsApi;
