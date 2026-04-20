import { GetHeroResponse, QueryHeroesResponse } from "@/types/heroes";
import { baseApi } from "./baseApi";
import { ApiResponse } from "@/types/api";
import { ApiTagTypes } from "@utils/apiTagTypes";

export const heroesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHero: builder.query<ApiResponse<GetHeroResponse>, number>({
      query: (id) => ({
          url: `/v1/heroes/${id}`,
          method: "GET",
      }),
      providesTags: [ApiTagTypes.Heroes],
    }),

    queryHeroes: builder.query<ApiResponse<QueryHeroesResponse[]>, void>({
      query: () => ({
          url: `/v1/heroes`,
          method: "GET",
      }),
      providesTags: [ApiTagTypes.Heroes],
    }),
  }),
});

export const {
    useGetHeroQuery,
    useQueryHeroesQuery,
} = heroesApi;
