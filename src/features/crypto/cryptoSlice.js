import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  assets: [
    {
      id: 'btc',
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      price: 61000,
      change1h: 0.2,
      change24h: -1.3,
      change7d: 5.1,
      marketCap: 1140000000000,
      volume24h: 32000000000,
      circulatingSupply: 18700000,
      maxSupply: 21000000,
      sparklineData: [60000, 60500, 60750, 61000, 61500, 61800, 62000]
    },
    {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: 3600,
      change1h: -0.1,
      change24h: 2.5,
      change7d: 8.3,
      marketCap: 424000000000,
      volume24h: 18000000000,
      circulatingSupply: 118000000,
      maxSupply: null,
      sparklineData: [3400, 3450, 3500, 3550, 3600, 3650, 3700]
    },
    {
      id: 'bnb',
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
      price: 540,
      change1h: 0.4,
      change24h: -0.6,
      change7d: 3.9,
      marketCap: 90000000000,
      volume24h: 1500000000,
      circulatingSupply: 163000000,
      maxSupply: 170000000,
      sparklineData: [500, 510, 520, 530, 540, 550, 560]
    },
    {
      id: 'xrp',
      name: 'XRP',
      symbol: 'XRP',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
      price: 1.09,
      change1h: 0.1,
      change24h: -1.1,
      change7d: 4.2,
      marketCap: 50000000000,
      volume24h: 900000000,
      circulatingSupply: 46000000000,
      maxSupply: 100000000000,
      sparklineData: [1.00, 1.03, 1.05, 1.07, 1.09, 1.11, 1.13]
    },
    {
      id: 'ada',
      name: 'Cardano',
      symbol: 'ADA',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
      price: 1.38,
      change1h: -0.3,
      change24h: 0.5,
      change7d: 2.1,
      marketCap: 44000000000,
      volume24h: 2500000000,
      circulatingSupply: 32000000000,
      maxSupply: 45000000000,
      sparklineData: [1.20, 1.25, 1.30, 1.35, 1.38, 1.40, 1.42]
    }
  ]
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset(state, action) {
      const updated = action.payload;
      const i = state.assets.findIndex(a => a.id === updated.id);
      if (i !== -1) {
        state.assets[i] = updated;
      }
    },
    // Optional: For bulk updates later
    setAllAssets(state, action) {
      state.assets = action.payload;
    }
  }
});

export const { updateAsset, setAllAssets } = cryptoSlice.actions;
export const selectAllAssets = state => state.crypto.assets;
export default cryptoSlice.reducer;
