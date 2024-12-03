import React from "react";
import LineChart from "../charts/LineChart";

const SalesOverviewCard = () => {
  return (
    <div className="card sales-card">
      <h3>Sales Overview</h3>
      <LineChart />
    </div>
  );
};

export default SalesOverviewCard;
