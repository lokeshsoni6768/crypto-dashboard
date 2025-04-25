# 📊 Crypto Tracker Dashboard

**Crypto Tracker Dashboard** is a responsive and dynamic web application built using **React.js** and **Redux Toolkit**. It simulates real-time cryptocurrency market behavior by continuously updating data like price, volume, and percentage changes. The app offers a clean UI and a data-rich experience for users interested in crypto tracking.

---

## 🚀 Features

- 🔄 **Live Simulated Updates** – Real-time updates of price, volume, and percentage changes every second.
- 📈 **Sparkline Mini Charts** – Visual representation of asset price trends.
- 🧾 **Crypto Data Table** – Displays detailed information including:
  - Logo, name, and symbol
  - Current price
  - 1h, 24h, and 7d % changes
  - Market cap and 24h volume
  - Circulating and max supply
- 🧮 **Summary Section** – Shows total assets, market cap, volume, and average price.
- 📱 **Fully Responsive** – Works great on mobile, tablet, and desktop.
- ✨ **Modern & Minimal UI** – Built using Tailwind CSS for styling.

---

## 🛠️ Tech Stack

- **React.js** – UI framework
- **Redux Toolkit** – State management
- **Tailwind CSS** – Styling and layout
- **Recharts** – For sparkline mini-charts
- **React Icons** – Icon set for visual appeal

---

## 📁 Folder Structure

crypto-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── (images, logos, etc.)
│
│   ├── components/
│   │   ├── CryptoTable.jsx
│   │   ├── SparklineChart.jsx
│   │   └── (other reusable UI components)
│
│   ├── features/
│   │   └── crypto/
│   │       ├── cryptoSlice.js
│   │       └── (any related logic like selectors or services)
│
│   ├── styles/
│   │   └── sidebar.css
│   │   └── (global or component-specific CSS/Tailwind overrides)
│
│   ├── App.jsx
│   ├── main.jsx (or index.js)
│   └── store.js (Redux store configuration)
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js (if you're using Vite)
