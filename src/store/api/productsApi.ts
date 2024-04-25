import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type Product from "../../types/Product";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<Product[], number>({
        query: (limit: number = 0) => {
          const ending = limit ? `?limit=${limit}` : "";
          return {
            url: `/products${ending}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export { productsApi };
export const { useFetchProductsQuery } = productsApi;
