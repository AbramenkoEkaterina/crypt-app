import { baseApi } from './baseApi';
import type { Coin } from '@/assets/model/types';

export const aseetApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query<Coin[], void>({
      query: () =>
        '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1',
    }),
  }),
});

export const { useGetAssetsQuery } = aseetApi;
