import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileUpdateDefaultEmail = createApi({
  reducerPath: "retailUserProfileUpdateDefaultEmail",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileUpdateDefaultEmail: builder.mutation({
      query: (userData) => ({
        url: "RetailUserProfile/Update-DefaultEmail",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileUpdateDefaultEmailMutation } =
  retailUserProfileUpdateDefaultEmail;

  