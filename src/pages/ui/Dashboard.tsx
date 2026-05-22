import { useGetAssetsQuery } from '@/shared/api/assetApi';
import { MarketTable } from '@/widgets/market-table/market-table';
import { Loader } from '@/shared/ui/Loader/Loader';

export const Doshboard = () => {
  const { data, isLoading, error } = useGetAssetsQuery();
  if (isLoading) return <Loader />;
  if (error) return <div> Error...</div>;
  if (!data || data.length === 0) {
    return <div> No coins found</div>;
  }
  return <>{data && <MarketTable coins={data} />}</>;
};
