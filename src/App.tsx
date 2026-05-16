import { Routes, Route } from 'react-router-dom';

import { Doshboard } from './pages/ui/Dashboard';
import { CoinDetails } from './pages/ui/CoinDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Doshboard />} />

      <Route path="/coin/:id" element={<CoinDetails />} />
    </Routes>
  );
}

export default App;
