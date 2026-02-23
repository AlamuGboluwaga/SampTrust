import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileUpdateUsername = createApi({
  reducerPath: "retailUserProfileUpdateUsername",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileUpdateUsername: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/Update-Username",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileUpdateUsernameMutation } =
  retailUserProfileUpdateUsername;
