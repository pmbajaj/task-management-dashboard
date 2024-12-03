import React from "react";

const WebsiteAnalyticsCard = () => {
  return (
    <div className="card analytics-card">
      <h3>Website Analytics</h3>
      <p>Total Conversion Rate: <b>28.5%</b></p>
      <div className="analytics-stats">
        <div>
          <p>12h</p>
          <span>Spend</span>
        </div>
        <div>
          <p>127</p>
          <span>Orders</span>
        </div>
        <div>
          <p>2.3k</p>
          <span>Items</span>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAnalyticsCard;
