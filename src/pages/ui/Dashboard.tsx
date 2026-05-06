import { useGetAssetsQuery } from '@/shared/api/assetApi';

export const Doshboard = () => {
  const { data, isLoading, error } = useGetAssetsQuery();
  if (isLoading) return <div> Loading ...</div>;
  if (error) return <div> Error...</div>;
  return (
    <div>
      {data?.map((coin) => (
        <div key={coin.id}>
          {coin.name} — {coin.current_price}
        </div>
      ))}
    </div>
  );
};
