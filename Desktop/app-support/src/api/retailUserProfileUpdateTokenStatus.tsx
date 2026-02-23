import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileUpdateTokenStatus = createApi({
  reducerPath: "retailUserProfileUpdateTokenStatus",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileUpdateTokenStatus: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/Update-Token-Status",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileUpdateTokenStatusMutation } =
  retailUserProfileUpdateTokenStatus;
