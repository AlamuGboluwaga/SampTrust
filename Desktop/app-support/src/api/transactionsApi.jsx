import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Helper function to get token from session storage
const getAuthToken = () => {
  const userData = sessionStorage.getItem('appsupportsuntrustuser');
  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      return parsedData.token;
    } catch (error) {
      console.error('Error parsing user data from session storage:', error);
      return null;
    }
  }
  return null;
};

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getAuthToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  tagTypes: ['Transactions'],
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (params = {}) => {
        const {
          page = 1,
          pageSize = 20,
          originatorAccountNumber,
          beneficiaryAccountNumber,
          userName,
          dateFrom,
          dateTo,
          responseCode
        } = params;

        const queryParams = new URLSearchParams({
          page: page.toString(),
          pageSize: pageSize.toString(),
          ...(originatorAccountNumber && { originatorAccountNumber }),
          ...(beneficiaryAccountNumber && { beneficiaryAccountNumber }),
          ...(userName && { userName }),
          ...(dateFrom && { dateFrom }),
          ...(dateTo && { dateTo }),
          ...(responseCode && { responseCode })
        });

        return `/Transactions?${queryParams.toString()}`;
      },
      providesTags: ['Transactions']
    }),
    
    getTransactionByReference: builder.query({
      query: (reference) => `/Transactions/${reference}`,
      providesTags: (result, error, reference) => [
        { type: 'Transactions', id: reference }
      ]
    })
  })
});

export const { 
  useGetTransactionsQuery, 
  useGetTransactionByReferenceQuery 
} = transactionsApi;