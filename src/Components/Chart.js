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
          <XAxis
            dataKey="reviews"
            domain={[0, 5000]}
            tickCount={11}
            tick={[0, 50, 100, 200, 300, 400, 500, 1000, 1500, 3000, 5000]}
            type="number"
            interval={"preserveStartEnd"}
          />
          <Legend />
          <YAxis
            domain={[0, 100]}
            tickCount={11}
            tick={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            type="number"
            interval={"preserveStartEnd"}
          />
          <Legend />
          <Line dataKey="reviews" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
