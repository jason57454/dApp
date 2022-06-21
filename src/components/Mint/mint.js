import React from "react";
import LeftNav from "../Leftnav/leftNav";
import "./mint.css";
import Topnav from "../Topnav/topnav";

function Mint() {
  return (
    <div className="wrapper_mint">
      <LeftNav></LeftNav>
      <Topnav></Topnav>
      <section id="mint">
        <div className="container_mint">
          <div className="mint_panel">
            <div className="mint_title">
              <p>Mint</p>
            </div>
            <div className="mint_value">
              <div className="col_value">
                <p>Treasury Balance</p>
                <h2>$0</h2>
              </div>
              <div className="col_value">
                <p>MIM Price</p>
                <h2>$0</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mint;
