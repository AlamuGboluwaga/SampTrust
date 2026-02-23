

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileActivateAccount = createApi({
  reducerPath: "retailUserProfileActivateAccount",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileActivateAccount: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/ACTIVATE-ACCOUNT",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileActivateAccountMutation } =
  retailUserProfileActivateAccount;
