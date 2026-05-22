import { useParams } from 'react-router-dom';
import { Loader } from '@/shared/ui/Loader/Loader';
import { useGetCoinByIdQuery } from '@/entities/asset/api/assetApi';
import { CoinChart } from '@/widgets/coin-chart/CoinChart';

export const CoinDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCoinByIdQuery(id!);
  if (isLoading) return <Loader />;
  if (!data) return <div>No data</div>;

  return (
    <div>
      <img src={data.image.large} width={80} />
      <h1>
        {data.name} ({data.symbol.toLocaleLowerCase()})
      </h1>

      <p>Price: ${data.market_data.current_price.usd}</p>
      <p>Market Cap: ${data.market_data.market_cap.usd}</p>

      <CoinChart id={data.id} />
    </div>
  );
};
