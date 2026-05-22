export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};

export type CoinDetails = {
  id: string;
  name: string;
  symbol: string;

  image: {
    large: string;
    small: string;
    thumb: string;
  };

  description: {
    en: string;
  };

  market_cap_rank: number;

  market_data: {
    current_price: {
      usd: number;
    };

    market_cap: {
      usd: number;
    };

    price_change_percentage_24h: number;
  };
};

export type CoinChartResponse = {
  prices: number[][];
};
