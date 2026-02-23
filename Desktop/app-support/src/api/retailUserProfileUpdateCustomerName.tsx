import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileUpdateCustomerName = createApi({
  reducerPath: "retailUserProfileUpdateCustomerName",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileUpdateCustomerName: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/Update-CustomerName",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileUpdateCustomerNameMutation } =
  retailUserProfileUpdateCustomerName;

  