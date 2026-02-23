import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileDeleteTokenByAccount = createApi({
  reducerPath: "retailUserProfileDeleteTokenByAccount",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileDeleteTokenByAccount: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/DeleteTokenByAccount",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileDeleteTokenByAccountMutation } =
  retailUserProfileDeleteTokenByAccount;
