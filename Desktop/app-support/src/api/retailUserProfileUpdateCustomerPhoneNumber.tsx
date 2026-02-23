import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileUpdateCustomerPhoneNumber = createApi({
  reducerPath: "retailUserProfileUpdateCustomerPhoneNumber",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileUpdateCustomerPhoneNumber: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/UPDATE-CUSTOMER-PHONENUMBER",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileUpdateCustomerPhoneNumberMutation } =
  retailUserProfileUpdateCustomerPhoneNumber;
