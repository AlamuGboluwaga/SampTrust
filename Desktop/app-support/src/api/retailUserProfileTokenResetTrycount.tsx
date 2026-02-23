
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileTokenResetTrycount = createApi({
  reducerPath: "retailUserProfileTokenResetTrycount",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileTokenResetTrycount: builder.mutation({
      query: (userData) => ({
        url: "RetailUserProfile/Update-DefaultEmail",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileTokenResetTrycountMutation } =
  retailUserProfileTokenResetTrycount;

  