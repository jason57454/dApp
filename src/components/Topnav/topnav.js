import React from "react";
import "./topnav.css";

export default function Topnav() {
  return (
    <div className="wrapper_topnav">
      <div id="topnav">
        <div className="container_topnav">
          <div className="btn_topnav">
            <div className="container_buy">
              <div className="buy_btn btn">
                <div>Buy $MIM</div>
              </div>
              <div className="hide_btn">
                <div className="buy_tdj">Buy on TraderJoe</div>
                <hr />
                <p>Add token to wallet</p>
                <hr />
                <div className="buy_mim">Buy MIM</div>
                <div className="buy_MIM">Buy MIM</div>
              </div>
            </div>
            <div className="wallet_btn btn">
              <div>Connect Wallet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
