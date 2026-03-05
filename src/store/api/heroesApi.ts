import { baseApi } from './baseApi';
import type GetHeroPageFilterResponse from '../../models/responseModels/GetHeroPageFilterResponse';
import type QueryHeroResponse from '../../models/responseModels/QueryHeroResponse';
import type ProxyResponse from '../../models/responseModels/ProxyResponse';
import type { GetHeroResponse } from '../../models/responseModels/GetHeroResponse';

export const heroesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPageFilters: builder.query<GetHeroPageFilterResponse, void>({
      query: () => 'v1/heroes/filters',
      transformResponse: (response: ProxyResponse<GetHeroPageFilterResponse>) => response.data!,
    }),

    queryHeroes: builder.query<QueryHeroResponse[], void>({
      query: () => 'v1/heroes',
      transformResponse: (response: ProxyResponse<QueryHeroResponse[]>) => response.data || [],
    }),

    getHeroById: builder.query<GetHeroResponse, number>({
      query: (id) => `v1/heroes/${id}`,
      transformResponse: (response: ProxyResponse<GetHeroResponse>) => response.data!,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPageFiltersQuery, useQueryHeroesQuery, useGetHeroByIdQuery } = heroesApi;
