import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const retailUserProfileResetDevice = createApi({
  reducerPath: "retailUserProfileResetDevice",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    retailUserProfileResetDevice: builder.mutation({
      query: (userData) => ({
        url: "/RetailUserProfile/Unregistered-Device(reset-device)",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useRetailUserProfileResetDeviceMutation } =
  retailUserProfileResetDevice;
