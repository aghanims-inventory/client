import { GetHeroResponse, QueryHeroesResponse } from "@/types/heroes";
import apiTagTypes from "@utils/apiTagTypes";
import { baseApi } from "./baseApi";
import { ApiResponse } from "@/types/api";

export const heroesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHero: builder.query<ApiResponse<GetHeroResponse>, number>({
      query: (id) => ({
          url: `/v1/heroes/${id}`,
          method: "GET",
      }),
      providesTags: [apiTagTypes.Heroes],
    }),

    queryHeroes: builder.query<ApiResponse<QueryHeroesResponse[]>, void>({
      query: () => ({
          url: `/v1/heroes`,
          method: "GET",
      }),
      providesTags: [apiTagTypes.Heroes],
    }),
  }),
});

export const {
    useGetHeroQuery,
    useQueryHeroesQuery,
} = heroesApi;
