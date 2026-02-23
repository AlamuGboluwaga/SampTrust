import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileUpdatePhoneNumber = createApi({
  reducerPath: "retailUserProfileUpdatePhoneNumber",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileUpdatePhoneNumber: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/Update-PhoneNumber' ",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileUpdatePhoneNumberMutation } =
  retailUserProfileUpdatePhoneNumber;
