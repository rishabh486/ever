import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import React from "react";
import { useData } from "../Context/dataContext";
import "./chart.css";
function Chart() {
  const { callData } = useData();
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={callData}
          width={50}
          height={50}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis dataKey="quantity" interval={"preserveStartEnd"} />
          <Legend />
          <YAxis dataKey="reviews" interval={"preserveStartEnd"} />
          <Legend />
          <Line dataKey="reviews" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
