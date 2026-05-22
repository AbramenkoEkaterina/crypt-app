//график
import { useGetCoinChartQuery } from '@/shared/api/assetApi';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type Props = {
  id: string;
};

export const CoinChart = ({ id }: Props) => {
  const { data, isLoading } = useGetCoinChartQuery({
    id,
    days: 7,
  });

  if (isLoading) return <div>Loading chart...</div>;
  if (!data) return null;

  const chartData = data.prices.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString(),
    price,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
