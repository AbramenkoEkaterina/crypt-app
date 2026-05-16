import { useParams } from 'react-router';

export const CoinDetails = () => {
  const params = useParams();
  return <div>Coin id : {params.id}</div>;
};
