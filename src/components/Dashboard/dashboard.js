import React from "react";
import LeftNav from "../Leftnav/leftNav";
import Topnav from "../Topnav/topnav";
import "./dashboard.css";

function Dashboard() {
  return (
    <div id="landing">
      <LeftNav></LeftNav>
      <Topnav></Topnav>
      <section id="dashboard">
        <div className="container_dashboard">
          <div className="dashboard_panel">
            <div className="flex_panel">
              <div className="left_panel panel">
                <p>MIM Price</p>
                <p className="value">$0.00</p>
              </div>
              <div className="right_panel panel">
                <p>Market Cap</p>
                <p className="value">$0,00</p>
              </div>
            </div>
            <div className="flex_panel">
              <div className="left_panel panel">
                <p>TVL</p>
                <p className="value">$0,00</p>
              </div>
              <div className="right_panel panel">
                <p>APY</p>
                <p className="value">0,00%</p>
              </div>
            </div>
            <div className="flex_panel">
              <div className="left_panel panel">
                <p>Current Index</p>
                <p className="value">0.00 MIM</p>
              </div>
              <div className="right_panel panel">
                <p>Treasury Balance</p>
                <p className="value">$0,00</p>
              </div>
            </div>
            <div className="flex_panel">
              <div className="left_panel panel">
                <p>Backing per $MIM</p>
                <p className="value">$0,00</p>
              </div>
              <div className="right_panel panel">
                <p>Runway</p>
                <p className="value">0 Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
