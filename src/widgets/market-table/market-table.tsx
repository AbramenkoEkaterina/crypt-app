import {
  Table,
  TableBody,
  TableCell, // ячейка
  TableContainer,
  TableHead,
  TableRow,
  Paper, //карточка для фона
  Box,
} from '@mui/material';

import { useNavigate } from 'react-router';

import type { Coin } from '@/entities/asset/model/types';
import styles from './MarketTable.module.css';

type Props = {
  coins: Coin[];
};

export const MarketTable = ({ coins }: Props) => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Coin</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>24h</TableCell>
            <TableCell>Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <TableRow
              key={coin.id}
              hover
              onClick={() => navigate(`/coin/${coin.id}`)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>
                <Box className={styles.coinInfo}>
                  <img src={coin.image} alt={coin.name} width={24} />
                  {coin.name} ({coin.symbol.toLocaleUpperCase()})
                </Box>
              </TableCell>
              <TableCell>${coin.current_price}</TableCell>
              <TableCell>{coin.price_change_percentage_24h}%</TableCell>
              <TableCell>${coin.market_cap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
