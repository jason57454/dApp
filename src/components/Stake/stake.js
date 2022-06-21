import React from "react";
import LeftNav from "../Leftnav/leftNav";
import Topnav from "../Topnav/topnav";
import "./stake.css";

function Stake() {
  return (
    <div className="wrapper_stake">
      <LeftNav></LeftNav>
      <Topnav></Topnav>
      <section id="stake">
        <div className="container_stake">
          <div className="stake_panel">
            <div className="title_panel">
              <h2>MIM Staking</h2>
              <p>8 hours to Next Rebase</p>
            </div>
            <div className="row_stake">
              <div className="col_stake">
                <p className="text">APY</p>
                <p className="number">88,143.8%</p>
              </div>
              <div className="col_stake">
                <p className="text">TVL</p>
                <p className="number">$0</p>
              </div>
              <div className="col_stake">
                <p className="text">Current Index</p>
                <p className="number">0 MIM</p>
              </div>
            </div>
            <div className="area_wallet_stake">
              <div className="stake_wallet">
                <p>Connect Wallet</p>
              </div>
              <p>Connect your wallet to stake MIM tokens!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stake;
