import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileDeactivateAccount = createApi({
  reducerPath: "retailUserProfileDeactivateAccount",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileDeactivateAccount: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/DEACTIVATE-ACCOUNT",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileDeactivateAccountMutation } =
  retailUserProfileDeactivateAccount;
