import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAsset } from "./features/crypto/cryptoSlice";
import { FaChartLine } from "react-icons/fa";
import CryptoTable from "./components/CryptoTable";

function getRandomChange() {
  return (Math.random() - 0.5) * 2;
}

const App = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    if (assets.length === 0) return;

    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * assets.length);
      const updatedAsset = { ...assets[index] };

      const change1h = getRandomChange();
      updatedAsset.change1h = change1h;
      updatedAsset.change24h = getRandomChange() * 5;
      updatedAsset.change7d = getRandomChange() * 10;
      updatedAsset.price = +(updatedAsset.price * (1 + change1h / 100)).toFixed(
        2
      );
      updatedAsset.volume24h = Math.round(
        updatedAsset.volume24h * (1 + getRandomChange() / 10)
      );

      dispatch(updateAsset(updatedAsset));
    }, 1000 + Math.random() * 1000);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  const totalMarketCap = assets.reduce(
    (acc, asset) => acc + asset.marketCap,
    0
  );
  const totalVolume24h = assets.reduce(
    (acc, asset) => acc + asset.volume24h,
    0
  );
  const avgPrice = assets.length
    ? (
        assets.reduce((acc, asset) => acc + asset.price, 0) / assets.length
      ).toFixed(2)
    : 0;

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>CryptoDash</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
        </ul>
      </aside>

      <main className="main">
        <header>
          <div className="flex items-center gap-4">
            <FaChartLine className="text-3xl logo" />
            <div className="flex flex-col w-full">
              <h1 className="font-bold text-white text-lg">
                Crypto Tracker Dashboard
              </h1>
              <div className="flex justify-between w-full text-sm text-indigo-200">
                <div className="flex">
                  Live simulated market updates every second
                </div>
                <b className="flex">
                  Developed By:{" "}
                  <a
                    className="text-white hover:text-gray-300"
                    target="blank"
                    href="https://www.linkedin.com/in/lokesh-soni-b6a057283/"
                  >
                    Lokesh Kumar Soni
                  </a>
                </b>
              </div>
            </div>
          </div>
        </header>

        <section className="main-content">
          <div className="summary">
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p>Total Assets: {assets.length}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="font-bold">Total Market Cap</h3>
                <p>${totalMarketCap.toLocaleString()}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="font-bold">Total 24h Volume</h3>
                <p>${totalVolume24h.toLocaleString()}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="font-bold">Average Price</h3>
                <p>${avgPrice}</p>
              </div>
            </div>
          </div>

          <section className="card mt-6">
            <CryptoTable />
          </section>
        </section>
      </main>
    </div>
  );
};

export default App;
