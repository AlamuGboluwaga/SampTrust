
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileCustomersUpdateTransactionLimit = createApi({
  reducerPath: "retailUserProfileDeleteTokenByAccount",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileCustomersUpdateTransactionLimit: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/DeleteTokenByAccount",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileCustomersUpdateTransactionLimitMutation } =
  retailUserProfileCustomersUpdateTransactionLimit;
