import { baseApi } from '@/shared/api/baseApi';
import type { Coin } from '@/entities/asset/model/types';
import type { CoinDetails } from '@/entities/asset/model/types';

export const assetApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query<Coin[], void>({
      query: () =>
        '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1',
    }),

    getCoinById: builder.query<CoinDetails, string>({
      query: (id) => `/coins/${id}`,
    }),
  }),
});

export const { useGetAssetsQuery, useGetCoinByIdQuery } = assetApi;
