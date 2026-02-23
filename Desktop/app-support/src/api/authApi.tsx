import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginFormData } from "../pages/Login";

export interface ResponseData {
  responseCode: string;
  responseDescription: string;
  data: {
    username: string;
    email: string;
    status: string;
  };
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    // Login mutation
    login: builder.mutation<ResponseData, LoginFormData>({
      query: (credentials) => ({
        url: "/Auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Verify OTP mutation
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: '/Auth/verify-otp',
        method: 'POST',
        body: otpData
      })
    }),

    //     // Resend OTP mutation
    //     resendOtp: builder.mutation({
    //       query: (resendData) => ({
    //         url: '/Auth/resend-otp',
    //         method: 'POST',
    //         body: resendData
    //       })
    //     })
  }),
});

// Export hooks for components
export const {
  useLoginMutation,
  useVerifyOtpMutation,
  // useResendOtpMutation
} = authApi;
