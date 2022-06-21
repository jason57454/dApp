import React, { useState } from "react";
import "./leftNav.css";
import dashboard from "../../assets/dashboard.svg";
import stake from "../../assets/stake.svg";
import mint from "../../assets/mint.svg";
import buy from "../../assets/buy.svg";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="wrapper_leftnav">
      <div className="hamburger" onClick={setMenuOpen}>
        <span className="hamburger_icon"></span>
        <span className="hamburger_icon"></span>
        <span className="hamburger_icon"></span>
      </div>
      <div id="sidebar" className={isMenuOpen ? "sidebar open" : "sidebar"}>
        <div id="sidebar_link" className="sidebarv_link" href="/">
          <img
            src="https://cdn-s-www.bienpublic.com/images/DB3835F0-6CF6-427A-A2D5-72B718E276B4/NW_raw/mickey-mouse-photo-pixy-org-1605551430.jpg"
            className="width-img"
          />
          <div className="close_btn" onClick={closeMenu}>
            <span className="close_icon rotate_left"></span>
            <span className="close_icon rotate_right"></span>
          </div>
        </div>
        <div className="menu_size">
          <nav role="navigation" id="sidebar_menu">
            <Link to="/">
              <div className="sidebar_link">
                <img src={dashboard} alt="" />
                Dashboard
              </div>
            </Link>
            <Link to="/stake">
              <div className="sidebar_link">
                <img src={stake} alt="" />
                Stake
              </div>
            </Link>
            <Link to="/mint">
              <div className="sidebar_link">
                <img src={mint} alt="" />
                Mint
              </div>
            </Link>

            <div className="menu_datas">
              <div className="mint_menu">
                <p className="margin_mint">MINT DISCOUNTS</p>

                <a className="sidebar_link under_mint" href="#">
                  <p>TEST-AVAX LP</p>
                  <span>0.00%</span>
                </a>
                <a className="sidebar_link under_mint" href="#">
                  <p>TEST-MIM LP</p>
                  <span>0.00%</span>
                </a>
                <a className="sidebar_link under_mint" href="#">
                  <p>MIM</p>
                  <span>0.00%</span>
                </a>
                <a className="sidebar_link under_mint" href="#">
                  <p>wAVAX</p>
                  <span>0.00%</span>
                </a>
              </div>
            </div>

            <div className="sidebar_link">
              <img src={buy} alt="" />
              <h6>Buy</h6>
            </div>

            <div className="link">
              <div className="social">
                <li className="nav-item">
                  <a href="#" target="_blank" className="nav-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" target="_blank" className="nav-link">
                    <i className="fab fa-discord"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" target="_blank" className="nav-link">
                    <i className="fab fa-medium"></i>
                  </a>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
