import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfile = createApi({
  reducerPath: "retailUserProfile",
  baseQuery: fetchBaseQuery(
    { baseUrl: baseUrl },
  ),
  endpoints: (builder) => ({
    retailUserProfile: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/Fixing-Limit( SYS MALF)",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileMutation } = retailUserProfile;
