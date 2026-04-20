import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiTagTypes } from '@utils/apiTagTypes';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: [ApiTagTypes.Heroes],
  endpoints: () => ({}),
});
