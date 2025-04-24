import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const SparklineChart = ({ data }) => {
  const chartData = data || [
    { price: 100 }, { price: 102 }, { price: 105 },
    { price: 103 }, { price: 108 }, { price: 110 },
    { price: 115 }
  ];

  return (
  <ResponsiveContainer >
    <LineChart data={chartData}>
      <Line type="monotone" dataKey="price" stroke="#4f46e5" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>

  );
};

export default SparklineChart;
