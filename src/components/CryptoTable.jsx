import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSlice';
import SparklineChart from './Sparklinechart';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Logo</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">1h %</th>
            <th className="px-4 py-2">24h %</th>
            <th className="px-4 py-2">7d %</th>
            <th className="px-4 py-2">Market Cap</th>
            <th className="px-4 py-2">24h Vol</th>
            <th className="px-4 py-2">Circulating</th>
            <th className="px-4 py-2">Max</th>
            <th className="px-4 py-2">Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 font-medium">{index + 1}</td>
              <td className="px-4 py-2">
                <img src={asset.logo} alt={asset.name} className="w-6 h-6" />
              </td>
              <td className="px-4 py-2">{asset.name}</td>
              <td className="px-4 py-2 font-semibold">{asset.symbol}</td>
              <td className="px-4 py-2">${asset.price.toLocaleString()}</td>
              <td className="px-4 py-2" style={{ color: asset.change1h >= 0 ? 'green' : 'red' }}>
                {asset.change1h.toFixed(2)}%
              </td>
              <td className="px-4 py-2" style={{ color: asset.change24h >= 0 ? 'green' : 'red' }}>
                {asset.change24h.toFixed(2)}%
              </td>
              <td className="px-4 py-2" style={{ color: asset.change7d >= 0 ? 'green' : 'red' }}>
                {asset.change7d.toFixed(2)}%
              </td>
              <td className="px-4 py-2">${asset.marketCap.toLocaleString()}</td>
              <td className="px-4 py-2">${asset.volume24h.toLocaleString()}</td>
              <td className="px-4 py-2">{asset.circulatingSupply.toLocaleString()}</td>
              <td className="px-4 py-2">{asset.maxSupply ? asset.maxSupply.toLocaleString() : 'N/A'}</td>
              <td className="px-16 py-2">
                <SparkLineChart data={asset.sparklineData} height={50} width={200}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
